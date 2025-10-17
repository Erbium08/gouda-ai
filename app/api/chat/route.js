export async function POST(request) {
  try {
    const body = await request.json();
    const {
      message,
      model_name = 'gouda0.0.1',
      max_tokens = 200,
      context = [],
    } = body;

    const backendResponse = await fetch('http://138.199.215.250:8000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, model_name, max_tokens, context }),
    });

    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      console.error('Backend error:', errorText);
      return new Response(
        JSON.stringify({ message: 'Backend service error', error: errorText }),
        { status: backendResponse.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await backendResponse.json();
    let responseText = data.response;

    const bannedKeywords = ['suicide', 'violence', 'bomb', 'kill', 'attack', 'drugs'];

    const containsUnsafeContent = bannedKeywords.some((keyword) =>
      responseText.toLowerCase().includes(keyword)
    );

    if (containsUnsafeContent) {
      responseText = "Sorry, I don't know what happened there. Try something else.";
    }

    return new Response(
      JSON.stringify({ message: data.response }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error processing chat request:', error);
    return new Response(
      JSON.stringify({ message: 'Internal server error', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}