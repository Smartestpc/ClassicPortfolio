function ButtomNav() {
  return (
    <div className="flex justify-evenly max-w-[600px] bg-gray-200 p-3 rounded-t-lg fixed bottom-0 left-0 right-0 mx-auto">
      <div
        className="h-20 w-20 bg-cover bg-center hover:scale-110 transition-transform"
        style={{ backgroundImage: "url('/files.png')" }}
      ></div>
      <div
        className="h-20 w-20 bg-cover bg-center hover:scale-110 transition-transform"
        style={{ backgroundImage: "url('/browser.png')" }}
      ></div>
      <div
        className="h-20 w-20 bg-cover bg-center hover:scale-110 transition-transform"
        style={{ backgroundImage: "url('/notes.png')" }}
      ></div>
      <div
        className="h-20 w-20 bg-cover bg-center hover:scale-110 transition-transform"
        style={{ backgroundImage: "url('/contact.png')" }}
      ></div>
      <div
        className="h-20 w-20 bg-cover bg-center hover:scale-110 transition-transform"
        style={{ backgroundImage: "url('/gallery.png')" }}
      ></div>
    </div>
  );
}

export default ButtomNav;
