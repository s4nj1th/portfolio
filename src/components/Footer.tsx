export default function Footer() {
  return (
    <footer className="w-full bg-[#111] border-t border-[#444] py-6">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-[#aaa] text-sm">
        <p>&copy; {new Date().getFullYear()} Sanjith. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="mailto:sanjith.develops@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
