# CV Maintenance Guide

This document explains how to update and compile your CV.

## Files

- `Rudi_Aj_CV.tex` - LaTeX source file for your CV
- `Rudi_Aj_CV.pdf` - Compiled PDF version (generated from .tex file)

## How to Update Your CV

### 1. Edit the LaTeX Source

Edit `Rudi_Aj_CV.tex` with your text editor to update any information:
- Experience entries
- Skills
- Education
- Contact information

### 2. Compile to PDF

After making changes, compile the LaTeX file to PDF:

```bash
cd public
tectonic Rudi_Aj_CV.tex
```

This will regenerate `Rudi_Aj_CV.pdf` with your updates.

## Installing Tectonic (First Time Only)

If you don't have Tectonic installed:

```bash
brew install tectonic
```

Tectonic is a modern, lightweight LaTeX compiler that automatically downloads required packages.

## Important Notes

- **Always update both files**: When you update experience/skills in `constants/data.ts` for the website, remember to also update `Rudi_Aj_CV.tex`
- **Check dates carefully**: Make sure dates are consistent between the website data and CV
- **Screen reader optimized**: The CV uses semantic LaTeX markup for accessibility
- **File size**: The compiled PDF should be around 47KB

## LaTeX Template

The CV uses the `moderncv` package with:
- Style: `banking`
- Color: `black`
- Font: TeX Gyre Pagella (Latin Modern Sans for headings)

## Troubleshooting

### PDF not generating
- Make sure you're in the `public` directory
- Check that `tectonic` is installed: `which tectonic`
- Look for error messages in the terminal output

### Formatting issues
- Check for special characters that need escaping: `%`, `$`, `&`, `#`, `_`, `{`, `}`
- Use `\%` for percent signs, `\&` for ampersands, etc.

### Font warnings
Font warnings about ToUnicode CMap are normal and don't affect the PDF functionality.

## Quick Reference

### Common LaTeX Commands Used

```latex
\cventry{dates}{role}{company}{location}{duration}{description and tasks}
\cvitem{label}{content}
\textit{italic text}
\textbf{bold text}
```

### Adding a New Experience Entry

```latex
\cventry{Jan 2024 -- Present}{Job Title}{Company Name}{Location}{duration}{%
\textit{Company description}
\begin{itemize}
\item First achievement or responsibility
\item Second achievement or responsibility
\end{itemize}}
```

## Keeping Website and CV in Sync

1. Update `constants/data.ts` for website
2. Update `public/Rudi_Aj_CV.tex` for CV
3. Compile CV: `tectonic Rudi_Aj_CV.tex`
4. Verify both are updated correctly
