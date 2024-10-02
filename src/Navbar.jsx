


function Navbar() {
  return (
    <nav className="bg-white shadow-2xl">
      <div className="container mx-auto p-4 flex justify-between items-center">
       

        <div className="flex justify-between w-52">
          <h1 className="text-gray-600 hover:text-gray-800">الرئيسية</h1>
          <h1  className="text-gray-600 hover:text-gray-800">المنتجات</h1>
          <h1  className="text-gray-600 hover:text-gray-800">اتصل بنا</h1>
        </div>

        <div className="relative">
          <a href="/cart" className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l1.4-8H5.4L7 13zm0 0L5 21m2-8l1.4 8M17 13l1.4 8M12 17h.01M17 13H7m10 8a2 2 0 11-4 0 2 2 0 014 0zm-6 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </a>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3+</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


