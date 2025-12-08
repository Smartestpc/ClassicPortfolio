function ButtomNav() {
  return (
    <div className="flex justify-evenly max-w-[600px] bg-gray-200 p-3 rounded-t-lg fixed bottom-0 left-0 right-0 mx-auto text-black text-center font-bold md:text-xl">
      <div>
        <div
          className="h-15 w-15 bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
          style={{ backgroundImage: "url('/files.webp')" }}
        ></div>
        <h3>Files</h3>
      </div>
      <div>
        <div
          className="h-15 w-15 bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
          style={{ backgroundImage: "url('/browser.webp')" }}
        ></div>
        <h3>Browser</h3>
      </div>
      <div>
        <div
        className="h-15 w-15 bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
        style={{ backgroundImage: "url('/notes.webp')" }}
      ></div>
      <h3>Notes</h3>
      </div>
      <div>
        <div
        className="h-15 w-15 bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
        style={{ backgroundImage: "url('/contact.webp')" }}
      ></div>
      <h3>Contact</h3>
      </div>
      <div>
        <div
        className="h-15 w-15 bg-cover bg-center hover:scale-110 transition-transform sm:w-20 sm:h-20"
        style={{ backgroundImage: "url('/gallery.webp')" }}
      ></div>
      <h3>Gallery</h3>
      </div>
    </div>
  );
}

export default ButtomNav;
