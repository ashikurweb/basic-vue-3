export default {
    template: `
        <button class="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed" :disabled="processing">
            <slot />
        </button>
    `,

    data () {
        return {
            processing: true
        }
    }
}