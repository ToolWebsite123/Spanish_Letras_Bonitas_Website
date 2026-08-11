export default function ThemeScript() {
  const themeInitializerScript = `
    (function() {
      try {
        var savedTheme = localStorage.getItem('theme');
        var theme = savedTheme || 'dark';
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: themeInitializerScript,
      }}
    />
  );
}
