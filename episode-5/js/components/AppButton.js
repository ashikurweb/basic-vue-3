export default {
  template: `
        <button 
        :class="{
                'font-bold py-2 px-4 rounded': true,
                'bg-blue-500 hover:bg-blue-600': type   === 'primary',
                'bg-red-500 hover:bg-red-700': type     === 'danger',
                'bg-green-500 hover:bg-green-700': type === 'success',
                'bg-gray-200 hover:bg-gray-400 disabled:cursor-not-allowed': type   === 'muted',
                'is-loading': processing
                }" 
                :disabled="processing">
            <slot />
        </button>
    `,

  props: {
    type: {
      type: String,
      default: "primary",
    },
    processing: {
      type: Boolean,
      default: false,
    },
  },
};
