
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* About Hero */}
      <section className="bg-brand text-white py-20">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-accent font-semibold mb-4">
            ABOUT BOOKNEST
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            More Than Just a Library
          </h1>

          <p className="text-slate-300 max-w-2xl mx-auto leading-8">
            BookNest is a place where readers discover knowledge,
            explore stories and build a lifelong reading habit.
          </p>

        </div>

      </section>

      {/* Introduction */}
      <section className="py-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-heading mb-6">
            Who We Are
          </h2>

          <p className="text-muted leading-8">
            BookNest is an online library management platform
            designed to make discovering and borrowing books
            simple. Readers can explore different categories,
            view book availability and request books from
            our digital collection.
          </p>

        </div>

      </section>

      {/* Mission and Vision */}
      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">

              <div className="text-4xl mb-5">🎯</div>

              <h2 className="text-2xl font-bold text-heading mb-4">
                Our Mission
              </h2>

              <p className="text-muted leading-7">
                Our mission is to make books easier to discover
                and borrowing easier to manage through a simple
                and accessible digital library.
              </p>

            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">

              <div className="text-4xl mb-5">🌟</div>

              <h2 className="text-2xl font-bold text-heading mb-4">
                Our Vision
              </h2>

              <p className="text-muted leading-7">
                Our vision is to encourage reading, support
                continuous learning and create a better
                experience for every book lover.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Why Choose BookNest */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose BookNest?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <div className="text-3xl mb-4">📚</div>

              <h3 className="font-bold text-xl mb-3">
                Explore Books
              </h3>

              <p className="text-muted leading-7">
                Discover books across different categories
                and find your next favourite read.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <div className="text-3xl mb-4">🔍</div>

              <h3 className="font-bold text-xl mb-3">
                Check Availability
              </h3>

              <p className="text-muted leading-7">
                Check available copies before requesting
                a book from the library.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <div className="text-3xl mb-4">📖</div>

              <h3 className="font-bold text-xl mb-3">
                Easy Borrowing
              </h3>

              <p className="text-muted leading-7">
                Submit borrowing requests and track
                their status through your account.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Call to Action */}
      <section className="bg-brand py-16 text-center text-white">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-5">
            Ready to Discover Your Next Book?
          </h2>

          <p className="text-slate-300 mb-8">
            Explore our collection and start your reading journey.
          </p>

          <Link
            href="/books"
            className="inline-block bg-accent text-brand px-8 py-3 rounded-lg font-bold hover:bg-amber-300 transition"
          >
            Explore Books
          </Link>

        </div>

      </section>

    </div>
  );
}
