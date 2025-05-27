import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
}

// Mock data - replace with your actual data source
const blogPosts: BlogPost[] = [
  {
    id: 'gouda-XS1',
    title: 'Gouda-XS1',
    excerpt: 'All new Gouda-XS1 LLM model built on the GPT-2 style transformer architecture',
    date: 'May 27, 2025',
    author: 'Gouda AI'
  }
]

export default function UpdatesPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] py-8">
      <meta name="google-adsense-account" content="ca-pub-2629682720782125"></meta>
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#64401e] text-center mb-12">
          Latest Updates
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/updates/${post.id}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#64401e] group-hover:border-[#d7c3aa]">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-[#64401e] mb-3 group-hover:text-[#d7c3aa] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}