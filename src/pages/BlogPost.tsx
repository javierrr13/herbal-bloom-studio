import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import CtaBand from "@/components/sections/CtaBand";
import PostCard from "@/components/sections/PostCard";
import { posts, relatedPosts, type BlogBlock } from "@/content/blog";
import { site } from "@/config/site";
import { formatDate } from "@/lib/format";
import { siteOrigin, usePageMeta } from "@/hooks/use-page-meta";
import NotFound from "./NotFound";

const Block = ({ block }: { block: BlogBlock }) => {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote>{block.text}</blockquote>;
    default:
      return <p>{block.text}</p>;
  }
};

const Article = ({ slug }: { slug: string }) => {
  const post = posts.find((p) => p.slug === slug)!;
  const related = relatedPosts(post);

  usePageMeta({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    type: "article",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      image: new URL(post.image, siteOrigin()).href,
      articleSection: post.category,
      mainEntityOfPage: `${siteOrigin()}/blog/${post.slug}`,
      author: post.author ? { "@type": "Person", name: post.author } : { "@type": "Organization", name: site.name },
      publisher: { "@type": "Organization", name: site.name },
    },
  });

  return (
    <>
      <article>
        <header className="container-site max-w-4xl pt-10 md:pt-14">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
            <ArrowLeft className="h-4 w-4" strokeWidth={1.6} />
            Blog
          </Link>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em]">
            <Link to={`/blog?categoria=${encodeURIComponent(post.category)}`} className="text-earth hover:text-pine">
              {post.category}
            </Link>
            <span className="h-px w-5 bg-border" aria-hidden="true" />
            <time dateTime={post.date} className="text-muted-foreground">
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="mt-5 text-[2.5rem] leading-[1.05] md:text-6xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          {post.author && <p className="mt-6 text-sm text-pine">Por {post.author}</p>}
        </header>
        <div className="container-site mt-12 max-w-5xl">
          <img src={post.image} alt={post.imageAlt} className="aspect-[16/9] w-full rounded-sm bg-beige object-cover" />
        </div>
        <div className="prose-site container-site max-w-3xl py-14 md:py-20">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
          <p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
            Este artículo tiene carácter divulgativo y no sustituye el consejo de un profesional sanitario.
          </p>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section border-t border-border bg-beige" aria-labelledby="related-title">
          <div className="container-site">
            <h2 id="related-title" className="text-4xl">
              Artículos relacionados
            </h2>
            <div className="mt-12 grid gap-x-10 gap-y-14 md:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} headingLevel="h3" />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
};

const BlogPost = () => {
  const { slug = "" } = useParams();
  if (!posts.some((p) => p.slug === slug)) return <NotFound />;
  return <Article key={slug} slug={slug} />;
};

export default BlogPost;
