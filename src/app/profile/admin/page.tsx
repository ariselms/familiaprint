export default function AdminPage() {
  return (
    <main>
      <section>
        <nav className="bg-white dark:bg-gray-950 py-16">
          <div className="container mx-auto">
            <h3 className="text-3xl mb-2 dark:text-white flex items-center">
              Admin Dashboard
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Manage your application settings and user accounts.
            </p>
          </div>
        </nav>
        <div className="container mx-auto py-8">
          {/* Admin content goes here */}
          <p>Welcome to the admin page!</p>
        </div>
      </section>
    </main>
  );
}