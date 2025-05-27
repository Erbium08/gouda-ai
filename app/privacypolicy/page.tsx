export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] py-8">
      <meta name="google-adsense-account" content="ca-pub-2629682720782125"></meta>
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-[#d7c3aa] rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-[#64401e] text-center mb-8">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-[#64401e] leading-relaxed">
            <p>1. Information We Collect
We do not collect or store any personal data or user messages. When you interact with our chatbot, your messages are transmitted securely to our API for processing and response generation. These messages are processed in real-time and are not stored.

2. Use of Information
All user input is processed solely to generate relevant responses and improve the immediate user experience. We do not retain, log, or use the data beyond the duration of your session.

3. Data Sharing
We do not share, sell, or transfer user data to third parties. User messages are handled exclusively by our own API and infrastructure.

4. Cookies and Tracking
We do not use cookies or tracking technologies within the chatbot interface.

5. Hosting and Security
The chatbot is hosted on Vercel, a secure and reputable hosting provider. While we do not store any message content, we implement industry-standard security measures to protect all transmitted data during processing.

6. Your Rights
Since we do not store any user data, there is no data available to access, correct, or delete. If you have any concerns, you may contact us</p>
          </div>
        </div>
      </div>
    </div>
  )
}