// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#d7c3aa] px-4 py-6 mt-4"> {/* changed mt-8 → mt-4 */}
      <div className="max-w-md mx-auto text-center px-4"> {/* changed max-w-7xl → max-w-xl */}
        <p className="text-[#64401e] text-sm">
          gouda-XS1 0.0.1
        </p>
        <p className="text-[#64401e] text-sm">
          gouda AI 0.1.0
        </p>
        <a>Privacy Policy</a>
      </div>
    </footer>
  )
}