import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import InstagramAccounts from "@/components/sections/InstagramAccounts";
import CtaBand from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/button";
import { news } from "@/content/news";
import { posts, sortedPosts } from "@/content/blog";
import { formatDate } from "@/lib/format";
import { usePageMeta } from "@/hooks/use-page-meta";

const News = () => {
  usePageMeta({
    title: "Novedades",
    description:
      "Novedades y actualidad de Herbolarium de la Fuente en Oviedo. Síguenos en Instagram: @herbolarium.delafuente y @comesanoycomebien.",
  });

  const latestPosts = sortedPosts().slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Actualidad"
        title={
          <>
            Novedades <em className="font-normal">del herbolario</em>
          </>
        }
        intro="Productos que llegan, avisos de la tienda y contenidos sobre alimentación saludable. La actualidad diaria se publica en Instagram."
        breadcrumbs={[{ label: "Novedades" }]}
      />

      {news.length > 0 && (
        <section className="section" aria-label="Novedades de la tienda">
          <div className="container-site">
            <ul className="divide-y divide-border border-y border-border">
              {news.map((item) => (
                <Reveal as="li" key={item.title + item.date} className="grid gap-6 py-10 md:grid-cols-12">
                  <time dateTime={item.date} className="eyebrow md:col-span-3">
                    {formatDate(item.date)}
                  </time>
                  <div className="md:col-span-6">
                    <h2 className="text-3xl">{item.title}</h2>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
                    {item.link && (
                      <a href={item.link.href} className="link-underline mt-4 inline-block text-forest">
                        {item.link.label}
                      </a>
                    )}
                  </div>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? ""}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-sm object-cover md:col-span-3"
                    />
                  )}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className={news.length > 0 ? "section bg-beige" : "section"} aria-labelledby="instagram-title">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Instagram"
              title={<span id="instagram-title">Síguenos para no perderte nada</span>}
              intro="Dos cuentas con contenidos distintos: la actualidad de la tienda y la divulgación sobre alimentación saludable de María de la Fuente."
            />
          </Reveal>
          <div className="mt-12">
            <InstagramAccounts />
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="section border-t border-border" aria-labelledby="blog-title">
          <div className="container-site">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading eyebrow="Blog" title={<span id="blog-title">Últimos artículos</span>} />
              <Button asChild variant="outline">
                <Link to="/blog">
                  Ver el blog <ArrowRight strokeWidth={1.6} />
                </Link>
              </Button>
            </div>
            <ul className="mt-12 grid gap-10 md:grid-cols-3">
              {latestPosts.map((post) => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`} className="group block">
                    <p className="eyebrow">{post.category}</p>
                    <h3 className="mt-3 text-2xl group-hover:text-forest">{post.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
};

export default News;
