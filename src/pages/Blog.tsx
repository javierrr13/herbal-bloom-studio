import { useSearchParams } from "react-router-dom";
import PageHeader from "@/components/common/PageHeader";
import Reveal from "@/components/common/Reveal";
import PostCard from "@/components/sections/PostCard";
import InstagramAccounts from "@/components/sections/InstagramAccounts";
import { blogCategories, sortedPosts } from "@/content/blog";
import { usePageMeta } from "@/hooks/use-page-meta";
import { cn } from "@/lib/utils";

const Blog = () => {
  const all = sortedPosts();
  const [params, setParams] = useSearchParams();
  const active = params.get("categoria");
  const list = active ? all.filter((p) => p.category === active) : all;
  const usedCategories = blogCategories.filter((c) => all.some((p) => p.category === c));

  usePageMeta({
    title: "Blog de alimentación saludable",
    description:
      "Artículos sobre alimentación saludable, dietética, infusiones, plantas aromáticas y bienestar de Herbolarium de la Fuente, Oviedo.",
    noindex: all.length === 0,
  });

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title={
          <>
            Alimentación saludable <em className="font-normal">y bienestar</em>
          </>
        }
        intro="Artículos divulgativos sobre alimentación, infusiones, plantas aromáticas y hábitos saludables. Información rigurosa, sin promesas milagrosas."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section">
        <div className="container-site">
          {all.length === 0 ? (
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-serif text-3xl text-pine md:text-4xl">Estamos preparando los primeros artículos.</p>
              <p className="mt-4 text-muted-foreground">
                Mientras tanto, puedes seguir nuestros contenidos sobre alimentación saludable en Instagram.
              </p>
              <div className="mt-12 text-left">
                <InstagramAccounts />
              </div>
            </div>
          ) : (
            <>
              {usedCategories.length > 1 && (
                <div role="group" aria-label="Filtrar por categoría" className="mb-14 flex flex-wrap gap-2">
                  {[null, ...usedCategories].map((c) => (
                    <button
                      key={c ?? "todas"}
                      type="button"
                      aria-pressed={active === c}
                      onClick={() => setParams(c ? { categoria: c } : {})}
                      className={cn(
                        "min-h-[2.5rem] rounded-full border px-4 text-xs font-medium transition-colors",
                        active === c ? "border-forest bg-forest text-warm" : "border-border text-pine hover:border-forest",
                      )}
                    >
                      {c ?? "Todas"}
                    </button>
                  ))}
                </div>
              )}
              <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                {list.map((post, i) => (
                  <Reveal key={post.slug} delay={(i % 3) * 80}>
                    <PostCard post={post} />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
