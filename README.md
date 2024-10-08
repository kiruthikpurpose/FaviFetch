# FaviFetch

FaviFetch is a simple and stylish browser extension that allows users to download the favicon of the current website they're visiting with just one click.

<p align="center">
  <img src="icon.png" alt="FaviFetch Logo" width="190" height="190">
</p>

## Features

- One-click favicon download
- Elegant and classic user interface
- Automatic naming of downloaded favicons based on the website
- Supports various favicon formats (ico, png, jpg, etc.)

## Installation

### For Development

1. Clone this repository or download the source code.
2. Open your browser's extension management page:
   - For Chrome: Navigate to `chrome://extensions`
   - For Firefox: Navigate to `about:addons`
3. Enable "Developer mode" (usually a toggle switch in the top right corner).
4. Click "Load unpacked" (Chrome) or "Load Temporary Add-on" (Firefox).
5. Select the directory containing the FaviFetch source code.

## Usage

1. Navigate to a website whose favicon you want to download.
2. Click on the FaviFetch extension icon in your browser toolbar.
3. In the popup window, click the "Download Favicon" button.
4. The favicon will be downloaded automatically, named after the website.

## File Structure

- `manifest.json`: Extension configuration file
- `popup.html`: HTML structure for the extension popup
- `popup.js`: JavaScript functionality for favicon downloading
- `icon.png`: Extension icon (used in both 48x48 and 64x64 sizes)

## Development

To modify or enhance FaviFetch:

1. Edit the relevant files using a text editor of your choice.
2. For styling changes, modify the `<style>` section in `popup.html`.
3. For functionality changes, edit `popup.js`.
4. After making changes, reload the extension in your browser's extension management page.

## Contributing

Contributions to FaviFetch are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icon designers (if you used any third-party icons or graphics)
- The open-source community for inspiration and resources

## Contact

If you have any questions, issues, or suggestions, please open an issue in this repository.

Enjoy using FaviFetch!
