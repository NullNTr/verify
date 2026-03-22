export default function Home() {
  const clientId = '1485138465283641467';
  const redirectUri = 'https://your-project-name.vercel.app/api/callback'; // ← 後で修正
  const authUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=identify%20guilds.join`;

  return (
    <main style={{ textAlign: 'center', padding: '100px 20px', background: '#2c2f33', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1>centarサーバーに参加する</h1>
      <p style={{ fontSize: '1.2rem', margin: '30px 0' }}>
        下のボタンを押すとDiscordで承認画面が開きます。<br />
        承認すると自動でサーバーに参加します。
      </p>
      <a
        href={authUrl}
        style={{
          background: '#5865f2',
          color: 'white',
          padding: '15px 40px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '1.3rem',
          display: 'inline-block',
        }}
      >
        Discordでログインして参加
      </a>
      <p style={{ marginTop: '50px', color: '#aaa' }}>
        ※ ポップアップブロックされた場合は許可してください
      </p>
    </main>
  );
}
