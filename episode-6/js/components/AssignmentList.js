export default {
    name: "AssignmentList",
    props: {
      assignments: { type: Array, required: true },
      title:       { type: String, required: true }
    },
    emits: ["remove","toggle"],
    template: `
      <section v-if="assignments.length" class="mt-6">
        <h2 class="font-bold text-2xl text-gray-800 mb-4">{{ title }}</h2>
        <ul class="space-y-4">
          <li
            v-for="item in assignments"
            :key="item.id"
            class="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <div class="flex items-center space-x-3">
              <input
                type="checkbox"
                :checked="item.completed"
                @change="$emit('toggle', item)"
                class="w-5 h-5 text-violet-500 border-gray-300 rounded"
              />
              <span :class="{ 'line-through text-gray-400': item.completed }">
                {{ item.name }}
              </span>
            </div>
            <button
              @click="$emit('remove', item.id)"
              class="text-rose-500 hover:text-rose-700 transition"
            >Delete</button>
          </li>
        </ul>
      </section>
    `
  };
  