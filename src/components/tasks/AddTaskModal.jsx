import Modal from "../ui/modal";
import { useForm } from "react-hook-form";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      deadline: "",
      author: "",
      priority: "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      className=""
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Add New Task"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
        <div className="grid gap-4 grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              {...register("title", { required: true })}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.title && (
              <p className="mt-2 text-sm text-red-600">Title is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              {...register("description", { required: true })}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.description && (
              <p className="mt-2 text-sm text-red-600">
                Description is required
              </p>
            )}
          </div>
          {/* ------- */}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Deadline
            </label>
            <input
              type="date"
              {...register("deadline", { required: true })}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.deadline && (
              <p className="mt-2 text-sm text-red-600">Deadline is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              {...register("author", { required: true })}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.author && (
              <p className="mt-2 text-sm text-red-600">Author is required</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Priority
          </label>
          <select
            {...register("priority", { required: true })}
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          >
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && (
            <p className="mt-2 text-sm text-red-600">Priority is required</p>
          )}
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={handleCancel}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
