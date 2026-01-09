
import React, { useEffect } from 'react';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, User, Clock, Share2, Youtube } from 'lucide-react';

interface BlogPageProps {
  slug: string;
}

const BlogPage: React.FC<BlogPageProps> = ({ slug }) => {
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | FalcoHN Blog`;
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold">Artículo no encontrado</h1>
        <a href="#/blog" className="mt-4 text-blue-600 hover:underline">Volver al blog</a>
      </div>
    );
  }

  return (
    <article className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumbs & Navigation */}
        <div className="mb-12 flex items-center justify-between">
          <a href="#/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors">
            <ArrowLeft size={20} /> Volver al Blog
          </a>
          <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
            <Share2 size={20} className="text-slate-600" />
          </button>
        </div>

        {/* Header */}
        <header className="mb-12 space-y-6">
          <span className="px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest rounded-full">
            {post.category}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1]">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-semibold text-slate-500 border-b border-slate-200 pb-8">
            <div className="flex items-center gap-3">
              <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <div>
                <p className="text-slate-900">{post.author.name}</p>
                <p className="text-[10px] uppercase text-slate-400">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5"><Calendar size={16} /> {post.date}</div>
            <div className="flex items-center gap-1.5"><Clock size={16} /> {post.readingTime} de lectura</div>
          </div>
        </header>

        {/* Featured Image */}
        <figure className="mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
        </figure>

        {/* Content */}
        <div 
          className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed
          prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-p:mb-6
          prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
          prose-a:text-blue-600 prose-a:font-bold prose-a:no-underline hover:prose-a:underline
          prose-strong:text-slate-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Footer */}
        <div className="mt-20 p-8 sm:p-12 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-black">¿Necesitas una estrategia personalizada?</h3>
              <p className="text-slate-400 text-lg">Hablemos de cómo aplicar estos conceptos a tu negocio específico en Honduras.</p>
              <a href="/#contacto" className="inline-block px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
                Agendar Consultoría Gratis
              </a>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center">
              <Youtube size={48} className="text-red-500 mx-auto mb-4" />
              <p className="font-bold text-lg mb-2">¿Prefieres ver el video?</p>
              <p className="text-sm text-slate-400 mb-6">Tengo una serie completa sobre este tema en mi canal.</p>
              <a href="https://youtube.com/@FalcoHN" target="_blank" className="text-sm font-black uppercase tracking-widest hover:text-blue-400 transition-colors">
                Ir al Canal →
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPage;
