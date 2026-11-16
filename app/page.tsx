import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const books = await prisma.book.findMany({
    take: 8,
    orderBy: {
      createdAt: "desc"
    }
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold mb-4">
              WELCOME TO BOOKNEST
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Discover Your Next Favourite Book
            </h1>
            <p className="text-slate-300 text-lg leading-8 mb-8">
              Explore amazing stories, discover new knowledge and borrow your favourite books from our library.
            </p>
            <Link
              href="/books"
              className="inline-block bg-accent text-brand px-8 py-3 rounded-lg font-bold hover:bg-amber-300 transition"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to BookNest
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-7">
            Your personal digital library. Find books, explore different categories and enjoy reading.
          </p>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-heading">
                Featured Books
              </h2>
              <p className="text-muted mt-2">
                Explore books available in our library.
              </p>
            </div>
            <Link
              href="/books"
              className="text-brand font-semibold hover:text-amber-600"
            >
              View All Books →
            </Link>
          </div>

          {books.length === 0 ? (
            <p className="text-center text-muted py-10">
              No books are available currently.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {books.map((book: any) => (
                <div
                  key={book.id}
                  className="border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition"
                >
                  <div className="bg-brand text-white rounded-lg p-8 mb-4 text-center">
                    <span className="text-4xl">📚</span>
                    <p className="text-sm mt-2">BookNest Library</p>
                  </div>
                  <p className="text-xs text-amber-700 font-semibold uppercase">
                    {book.category}
                  </p>
                  <h3 className="text-lg font-bold text-heading mt-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted mt-1">
                    By {book.author}
                  </p>
                  <p className="text-sm text-muted mt-3">
                    Available Copies: {book.availableCopies}
                  </p>
                  <Link
                    href={`/books/${book.id}`}
                    className="block text-center bg-brand text-white py-2 rounded-lg mt-5 hover:bg-brand-light transition"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
