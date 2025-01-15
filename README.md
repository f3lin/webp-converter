# WebP Converter

A small, easy-to-use tool to convert images into the WebP format using Docker.

## Requirements

- Docker installed on your machine.
- The image to be converted should be in the directory mounted to the Docker container (``$(pwd)`` in the example above).

## Features
- Converts images to WebP format quickly and efficiently.
- Outputs detailed conversion information, including format, dimensions, and size.
- Dockerized for easy setup and portability.

---

## Getting Started

Follow these steps to get the WebP Converter up and running:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
$ git clone git@github.com:f3lin/webp-converter.git
$ cd webp-converter
```

### 2. Build the Docker Image

Build the Docker image:

```bash
$ docker build -t webp-converter .
```

### 3. Convert Your Image

Run the tool to convert an image to WebP format. Replace image.png with the path to your image file:

```bash
$ chmod -R 777 $(pwd)
$ docker run --rm -v $(pwd):/data webp-converter /data/image.png
```

Upon successful conversion, you’ll see output similar to this:

```bash
Successfully converted "/data/image.png" to "/data/image.webp".
Details: {
  format: 'webp',
  width: 600,
  height: 450,
  channels: 4,
  premultiplied: true,
  size: 14974
}
```

### 4. Verify the Output

List the directory to confirm the new ``.webp`` file was created:

```bash
$ ls
```
Example output:

```bash
app.js  Dockerfile  image.png  image.webp  package.json  README.md
```

## Troubleshooting

- Permission Issues: Ensure the working directory has the appropriate permissions:
```bash
$ chmod -R 777 $(pwd)
```
- Invalid Input: Make sure the input image file exists and is supported.