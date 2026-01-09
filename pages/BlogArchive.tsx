
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const BlogArchive: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-20 space-y-6">
          <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tighter">
            Insights y <br /> <span className="text-blue-600">Estrategias</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Una colección de artículos diseñados para elevar tu criterio digital y fortalecer tu autoridad en el mercado de Honduras.
          </p>
          
          <div className="relative max-w-md pt-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Buscar artículos..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
            />
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <a key={post.id} href={`#/blog/${post.slug}`} className="group flex flex-col h-full">
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-md">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest rounded-full text-slate-900 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-600 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full" />
                  <span className="text-xs font-bold text-slate-900">{post.author.name}</span>
                </div>
                <ArrowRight size={18} className="text-blue-600 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArchive;
