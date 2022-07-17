## PDF Generator using PDFKit in ExpressJs

Here we are using the pdfkit liberary to generate the pdf from the backend (Express JS)

### How to use it

for using it simply clone it and hit

```bash
npm i
```

#### behind the scene

For installing it in the project write the following command on the terminal or command prompt.

```bash
npm install pdfkit
```

import following in your project

```bash
const PDFDocument = require('pdfkit');
const doc = new PDFDocument;
```

for adding new page in pdf

```bash
doc.addPage()
```

for saving pdf in root directory

```bash
doc.pipe(fs.createWriteStream('PDF Name'));
```

for complete documentation you can read the pdf included or you can directly visit https://pdfkit.org/
