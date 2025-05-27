export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] py-8">
      <meta name="google-adsense-account" content="ca-pub-2629682720782125"></meta>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-[#d7c3aa] rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-[#64401e] text-center mb-8">
            About Gouda
          </h1>
          
          <div className="space-y-6 text-[#64401e] leading-relaxed">
            <p>
              Gouda AI was founded in 2025 as a way to learn the theory behind Machine Learning, since my GPU is old I couldn't train gouda very well,
              its trained on just 0.1 Epochs of the Fineweb EDU dataset and so responses are completely incoherent. I have tried to keep this project to either
              completely free or as cheap as possible for me and so gouda itself cost nothing for me to make and the only cost has been a server to host it
            </p>
            
            <p>
              Whilst I continue to work on coherent AI projects as well as an equally bad image generator, in the mean time I thought I should give access to the treasure
              trove of responses Gouda-XS1 can give.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}