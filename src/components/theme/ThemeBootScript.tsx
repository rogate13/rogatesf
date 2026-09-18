import { themeConfig, themes } from "@/data";

export function ThemeBootScript() {
  const payload = JSON.stringify({ themeConfig, themes }).replace(/</g, "\\u003c");
  const script = `
    (function () {
      try {
        var data = ${payload};
        var saved = localStorage.getItem(data.themeConfig.storageKey);
        var id = saved || data.themeConfig.defaultTheme;
        var theme = data.themes.find(function (item) { return item.id === id; }) || data.themes[0];
        if (!theme) return;
        var root = document.documentElement;
        root.dataset.theme = theme.id;
        root.style.colorScheme = theme.scheme;
        Object.keys(theme.variables).forEach(function (key) {
          root.style.setProperty('--' + key, theme.variables[key]);
        });
      } catch (_) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
