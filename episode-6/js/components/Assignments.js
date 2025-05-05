import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },
    data() {
        return {
            newTodo: '',
            showError: false,
            assignments: [
                { id: 1, name: 'Learn Vue', completed: false },
                { id: 2, name: 'Learn React', completed: false },
                { id: 3, name: 'Learn Angular', completed: false }
            ]
        }
    },

    methods: {
        addTodo() {
            if (!this.newTodo.trim()) {
                this.showError = true;
                return;
            }
            this.assignments.push({
                id: Date.now(),
                name: this.newTodo.trim(),
                completed: false
            });
            this.newTodo = '';
            this.showError = false;
        },

        removeAssignment(id) {
            this.assignments = this.assignments.filter(a => a.id !== id);
        },

        moveToCompleted(a) {
            a.completed = true;
        },

        moveToInProgress(a) {
            a.completed = false;
        }
    },

    template: `
    <div class="w-full max-w-lg p-6 bg-white rounded-lg shadow-xl">
      <div class="mt-8 flex space-x-4 mb-6">
        <input
          v-model="newTodo"
          @keyup.enter="addTodo"
          :class="{ 'border-red-500': showError }"
          class="flex-1 p-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
          placeholder="Add a new task..."
        />
        <button
          @click="addTodo"
          class="bg-violet-500 text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
        >Add</button>
      </div>
      <p v-if="showError" class="text-red-500 mb-4">Please enter a task before adding.</p>

      <!-- In Progress -->
      <assignment-list
        :assignments="assignments.filter(a => !a.completed)"
        title="In Progress"
        @remove="removeAssignment"
        @toggle="moveToCompleted"
      />

      <!-- Completed -->
      <assignment-list
        :assignments="assignments.filter(a => a.completed)"
        title="Completed"
        @remove="removeAssignment"
        @toggle="moveToInProgress"
      />
    </div>
    `,
}