import Link from 'next/link'
import { notFound } from 'next/navigation'

interface BlogPost {
  id: string
  title: string
  content: string
  date: string
  author: string
  readTime: string
}

// Mock data - replace with your actual data source
const blogPosts: { [key: string]: BlogPost } = {
  'gouda-XS1': {
    id: 'gouda-XS1',
    title: 'Gouda-XS1',
    content: `
      <p>Release of barely trained transformer LLM</p>
      
      <p>After training for nearly 12 hours on a 2060 rtx graphics card, gouda-XS1 has gotten to its release date. With a loss of 4.5 and 144M params Gouda is not breaking records in the LLM space.
      It is trained on XS version of the FineWebEDU dataset and trained on 0.1 Epochs of it meaning that has seen 1 billion previous tokens</p>
      
      <p>
      Gouda is a GPT-2 style transformer when evaluated on HellaSwag evaluation model, it scores 24%. This means it is worse than just guessing. Humans score 95% and models
      of a similar size typically score ~30%
      </p>
      <h2>Why Gouda?</h2>
      <ul>
        <li>We Know <strong>Gouda</strong> is bad, thats why its good</li>
        <li>It <strong>Cannot</strong> do the simplest task, but sometimes a few characters are relevant</li>
        <li>Maybe thats its USP</li>
      </ul>
      
      <p>Any and all funds earned by this project will be used in making more or maybe even better models</p>
      
      <p></p>
    `,
    date: 'May 27, 2025',
    author: 'Gouda AI',
    readTime: 'Less than a minute'
  }
}

interface Props {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts[params.id]
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#f5f0e8] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          href="/updates"
          className="inline-flex items-center text-[#64401e] hover:text-[#d7c3aa] mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Updates
        </Link>
        
        <article className="bg-white rounded-xl shadow-lg p-8">
          <header className="mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold text-[#64401e] mb-4">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 space-x-4">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          
          <div 
            className="prose prose-lg max-w-none text-gray-800 prose-headings:text-amber-800 prose-a:text-amber-600 prose-strong:text-amber-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  )
}