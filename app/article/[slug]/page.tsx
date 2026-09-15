import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { articles, getArticle } from '@/lib/content';

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: `${article.title} | نبض يومي`, description: article.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return (
    <main className="container article">
      <a href="/">← الرئيسية</a>
      <div className="tag">{article.category}</div>
      <h1>{article.title}</h1>
      <p className="notice">{article.excerpt}</p>
      <p><strong>تاريخ النشر:</strong> {article.publishedAt} · <strong>مدة القراءة:</strong> 3 دقائق</p>
      {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <p><strong>المصادر:</strong> تُضاف المصادر الأصلية المناسبة لكل مقال عند النشر التحريري النهائي.</p>
      <a className="btn" href="/archive">العودة إلى الأرشيف</a>
    </main>
  );
}
