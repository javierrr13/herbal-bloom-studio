import { Link } from "react-router-dom";
import type { BlogPost } from "@/content/blog";
import { formatDate } from "@/lib/format";

const PostCard = ({ post, headingLevel: H = "h2" }: { post: BlogPost; headingLevel?: "h2" | "h3" }) => (
  <article className="group">
    <Link to={`/blog/${post.slug}`} className="block">
      <div className="aspect-[3/2] overflow-hidden rounded-sm bg-beige">
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
        <span className="text-earth">{post.category}</span>
        <span className="h-px w-5 bg-border" aria-hidden="true" />
        <time dateTime={post.date} className="text-muted-foreground">
          {formatDate(post.date)}
        </time>
      </div>
      <H className="mt-3 text-[1.75rem] leading-tight transition-colors group-hover:text-forest">{post.title}</H>
      <p className="mt-2 leading-relaxed text-muted-foreground">{post.excerpt}</p>
    </Link>
  </article>
);

export default PostCard;
