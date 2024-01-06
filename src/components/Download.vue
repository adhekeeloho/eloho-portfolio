<template>
    <div>
        <button @click="downloadPdf" class="flex items-center w-[200px] px-6 py-3 mb-3 text-lg text-white bg-gradient-to-r from-blue-300 via-teal-500 to-purple-400 rounded-md sm:mb-0 sm:w-[200px]">
            <h1 class="pr-3">Download CV</h1>
                   
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class=" h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg></button>
    </div>
</template>

<script>
export default {
    // name: 'DownloadPdfButton',
    props: {
        pdfUrl: {
            type: String,
            required: true
        },
        pdfFileName: {
            type: String,
            required: true
        }
    },
    methods: {
        downloadPdf() {
            // create element <a> for download PDF
            const link = document.createElement('a');
            link.href = this.pdfUrl;
            link.target = '_blank';
            link.download = this.pdfFileName;

            // Simulate a click on the element <a>
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
</script>