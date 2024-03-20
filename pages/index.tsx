export default function HomePage() {
  return (
    <div className="p-6 bg-slate-300 min-h-screen">
      <div className="flex flex-col bg-white md:flex-row ">
        <img className="hidden md:flex " src="/images/bg-main-desktop.png" alt="" />
        <img className="md:hidden" src="/images/bg-main-mobile.png " alt="" />
        <div className="p-6 font-semibold font-mono space-y-5    ">
          <div className="flex flex-col space-y-2">
            <label className="text-purple-900 tracking-wider"  htmlFor="name">CARDHOLDER NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Jane Appleseed"
              className="border-2 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-purple-900 tracking-wider"  htmlFor="name">CARDHOLDER NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Jane Appleseed"
              className="border-2 rounded-lg px-4 py-2 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
