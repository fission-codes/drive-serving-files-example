const imageOptions = document.getElementById('imageOptions');
const selectedImage = document.getElementById('selectedImage');

fetch('https://ipfs.runfission.com/api/v0/ls/bafybeifk5fpmho7azp4ed7gbooqrtnfnh5flyvbkvwtbhwpbjizxykxd5y')
  .then(async response => {
    const directoryListing = await response.json();
    const files = directoryListing.Objects[0].Links.map(link => {
      return {
        name: link.Name,
        link: `https://brian.files.fission.name/p/Art/${link.Name}`
      }
    });
    files.forEach(file => {
      const option = imageOption(file);
      imageOptions.appendChild(option);
    });
  });

function imageOption(file) {
  const option = document.createElement('aside');
  option.textContent = file.name;
  option.addEventListener('click', () => selectedImage.src = file.link);
  return option;
}