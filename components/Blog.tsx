
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  // Show only featured posts on homepage
  const featuredPosts = BLOG_POSTS.slice(0, 2);

  return (
    <section id="blog" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Blog de Notas</h2>
            <p className="text-4xl font-black text-slate-900">Insights Estratégicos</p>
            <p className="text-lg text-slate-600">Compartiendo el "Cómo" detrás del éxito digital en el mercado local.</p>
          </div>
          <a href="#/blog" className="px-6 py-3 border-2 border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-all">
            Ver todos los artículos
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {featuredPosts.map((post) => (
            <a 
              key={post.id} 
              href={`#/blog/${post.slug}`}
              className="group block"
            >
              <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-8 shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="space-y-4 px-2">
                <div className="flex items-center gap-6 text-sm font-semibold text-slate-500 uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User size={14} /> {post.author.name}</span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 font-bold text-blue-600 group-hover:gap-4 transition-all">
                    Leer artículo completo <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
