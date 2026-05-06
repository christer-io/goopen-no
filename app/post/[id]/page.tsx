import { NotFound } from "@/components/NotFound";
import { Header } from "@/components/Header";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { getAllMarkdownPosts, getMarkdownPostBySlug } from "@/lib/content";

function GitHubLogo() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.86 8.35 6.84 9.7.5.1.68-.22.68-.5v-1.9c-2.78.62-3.36-1.22-3.36-1.22-.46-1.18-1.1-1.5-1.1-1.5-.9-.63.08-.62.08-.62 1 .08 1.52 1.06 1.52 1.06.88 1.54 2.3 1.1 2.86.84.08-.66.34-1.1.62-1.35-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.38-2.04 1.02-2.76-.1-.26-.44-1.3.1-2.72 0 0 .84-.28 2.76 1.05A9.34 9.34 0 0 1 12 6.9c.86 0 1.72.12 2.52.36 1.92-1.33 2.76-1.05 2.76-1.05.54 1.42.2 2.46.1 2.72.64.72 1.02 1.64 1.02 2.76 0 3.94-2.34 4.8-4.58 5.06.36.32.68.94.68 1.9v2.8c0 .28.18.6.7.5A10.14 10.14 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export async function generateStaticParams() {
  const posts = await getAllMarkdownPosts();
  return posts.map((post) => ({ id: post.slug.current }));
}

  async function Post({params}: {
    params: Promise<{id: string}>
})  {
    const { id } = await params;
    const myPost = await getMarkdownPostBySlug(id);
    if (!myPost) {
      //return 404 page
      return <div><NotFound /></div>
    }

    const githubFileUrl = `https://github.com/christer-io/goopen-no/blob/main/content/${encodeURIComponent(
      myPost.slug.current
    )}.md`;

    return (
       
      <div className=" mx-auto">
      <Header />  
      <div className="pt-1 max-w-3xl mx-auto pb-8 pl-3 pr-3">
      <MarkdownRenderer markdown={myPost.body} />
      <div className="mt-6 flex justify-end">
        <a
          href={githubFileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Se eller foresla endringer pa GitHub"
          className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100"
        >
          <GitHubLogo />
          <span>Se pa GitHub</span>
        </a>
      </div>
          

          </div>
         
          
      </div>
    )

    
    
  }
  
  

export default Post
