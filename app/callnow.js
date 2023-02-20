import Link from "next/link";

export default function callNow() {
  return (
    <div className="mt-10 mb-4 flex items-center justify-center gap-x-6">
      <Link
        href="tel:7023346800"
        style={{ textDecoration: "underline", color: "white" }}
        className="rounded-md bg-indigo-800 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Call Us Now{" "}
      </Link>

      <a href="https://www.yelp.com/biz/zohan-handyman-las-vegas" target="_blank" className="text-base font-semibold leading-7 text-gray-900">
        Learn more <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
