import { fetchCatalogs } from "../../../../lib/fetchCatalogs";
import { fetchProductsByCatalog } from "../../../../lib/fetchProductsByCatalog";
import { fetchProduct } from "../../../../lib/fetchProduct";
import Parser, { domToReact } from "html-react-parser";
import Breadcrumbs from "@/components/Navigation/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";

function Product({
  catalogs,
  products,
  product: { name, description, image },
  catalogSlug,
  productSlug,
}) {
  const options = {
    replace: ({ attribs, children, name }) => {
      if (name === "li") {
        return (
          <li className="list-disc ml-5">{domToReact(children, options)}</li>
        );
      }
    },
  };

  return (
    <div className="mt-24">
      <Breadcrumbs
        items={[
          { label: "Catalog", href: "/catalog" },
          { label: catalogSlug, href: `/catalog/${catalogSlug}` },
          {
            label: productSlug,
            href: `/catalog/${catalogSlug}/${productSlug}`,
          },
        ]}
      />
      <h1 className="text-4xl font-bold leading-tight mb-[4rem] ml-40">
        Catalog
      </h1>
      <div className="flex ml-40">
        <ul>
          {catalogs?.map((catalog) => (
            <li key={catalog.id}>
              <Link href={`/catalog/${catalog.catalogSlug}`}>
                {catalogSlug === catalog.name.toLowerCase() ? (
                  <>
                    {catalog.name}
                    <ul>
                      {products.map((product) => (
                        <li
                          key={product.id}
                          className={
                            product.name === productSlug ? "font-bold" : ""
                          }
                        >
                          {product.name}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  catalog.name
                )}
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="mt-20 ml-40">{name}</h2>
        {image
          .filter((img) => img.fileName.includes("w300"))
          .map((img) => (
            <Image
              src={img.url}
              alt={img.fileName}
              height={330}
              width={300}
              className="mt-20 ml-10"
            />
          ))}
      </div>
      <div className="mt-14 ml-[22rem]">{Parser(description, options)}</div>
    </div>
  );
}

export async function getStaticPaths() {
  const catalogs = await fetchCatalogs();
  const paths = [];

  for (const catalog of catalogs) {
    const products = await fetchProductsByCatalog(catalog.catalogSlug);

    for (const product of products) {
      paths.push({
        params: {
          catalogSlug: catalog.catalogSlug,
          productSlug: product.productSlug,
        },
      });
    }
  }

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const { catalogSlug, productSlug } = params;
  const product = await fetchProduct(productSlug);
  const catalogs = await fetchCatalogs();
  const products = await fetchProductsByCatalog(catalogSlug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      catalogs,
      products,
      product,
      catalogSlug,
      productSlug,
    },
    revalidate: 60,
  };
}

export default Product;
