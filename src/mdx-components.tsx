import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
    wrapper: ({ children }) => (
        <article className="prose prose-neutral dark:prose-invert">
            {children}
        </article>
    )
}

export function useMDXComponents(): MDXComponents {
    return components
}