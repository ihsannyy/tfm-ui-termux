// --- Nerd Font glyphs for Terminal & Termux ---
// Uses standard BMP Private Use Area (0xE000 - 0xF8FF) codepoints compatible
// with 100% of Nerd Fonts (JetBrainsMono, Meslo, FiraCode, Hack, etc.)
// on Linux, macOS, and Android/Termux.

export const glyph: Record<string, string> = {
  home: "\u{F015}",            // 
  star: "\u{F005}",            // 
  clock: "\u{F017}",           // 
  bookmark: "\u{F02E}",        // 
  "trash-can": "\u{F1F8}",     // 
  folder: "\u{E5FF}",          // 
  "folder-plus": "\u{E5FE}",   // 
  harddisk: "\u{F0A0}",        // 
  usb: "\u{F287}",             // 
  network: "\u{F0EC}",         // 
  eject: "\u{F052}",           // 
  search: "\u{F002}",          // 
  file: "\u{F15B}",            // 
  "file-code": "\u{F1C9}",     // 
  "file-document": "\u{F15C}", // 
  "file-image": "\u{F1C5}",    // 
  "file-music": "\u{F1C7}",    // 
  "file-video": "\u{F1C8}",    // 
  "file-pdf-box": "\u{F1C1}",  // 
  "zip-box": "\u{F1C6}",       // 
  "file-font": "\u{F031}",     // 
  "book-open": "\u{F02D}",     // 
  database: "\u{F1C0}",        // 
  certificate: "\u{F0A3}",     // 
  cube: "\u{F1B2}",            // 
  email: "\u{F0E0}",           // 
  magnet: "\u{F076}",          // 
  android: "\u{F17B}",         // 
  "chevron-left": "\u{F053}",  // 
  "chevron-right": "\u{F054}", // 
  "desktop-tower": "\u{F108}", // 
  cog: "\u{F013}",             // 
  "cog-box": "\u{F085}",       // 
  power: "\u{F011}",           // 
  "power-plug": "\u{F1E6}",    // 
  eye: "\u{F06E}",             // 
  "eye-off": "\u{F070}",       // 
  "content-copy": "\u{F0C5}",  // 
  "content-paste": "\u{F0EA}", // 
  "content-cut": "\u{F0C4}",   // 
  information: "\u{F05A}",     // 
  pencil: "\u{F040}",          // 
  "select-all": "\u{F046}",    // 
  sort: "\u{F0DC}",            // 
  "checkbox-marked": "\u{F046}", // 
  "checkbox-blank": "\u{F096}",  // 
  pause: "\u{F04C}",           // 
  play: "\u{F04B}",            // 
  close: "\u{F00D}",           // 
  check: "\u{F00C}",           // 
  terminal: "\u{F120}",        // 
  plus: "\u{F067}",            // 
  disc: "\u{F10A}",            // 
  package: "\u{F1B3}",         // 
  "arrow-up": "↑",
  "arrow-down": "↓",
};

export const glyphFor = (name: string): string => glyph[name] ?? glyph.file ?? "\u{FFFD}";

// every file-type category the classifier can emit must have a glyph: fill
// unknown ones with the generic file glyph so a new filetype never renders □
export const ensureGlyphFallbacks = (names: Iterable<string>): void => {
  for (const n of names) if (!(n in glyph)) glyph[n] = glyph.file!;
};
