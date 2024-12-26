import { ErrorMessage, Field } from "formik";

export default function EventForm() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full flex-col items-center justify-between gap-5 lg:flex-row">
        <div className="flex w-full flex-col items-start justify-center lg:w-1/2">
          <label
            htmlFor="title"
            className="mb-2 block font-medium text-gray-900 lg:text-lg"
          >
            Title
          </label>
          <Field
            name="title"
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-[gray-900] focus:border-accent focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-accent focus:ring-accent"
          />
          <ErrorMessage
            name="title"
            component="span"
            className="text-red-500"
          />
        </div>

        <div className="flex w-full flex-col items-start justify-center lg:w-1/2">
          <label
            htmlFor="category"
            className="mb-2 block font-medium text-gray-900 lg:text-lg"
          >
            Category
          </label>
          <Field
            name="category"
            as="select"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-accent focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-accent focus:ring-accent"
          >
            <option value="">Choose category</option>
            <option value="Training">Training</option>
            <option value="Friendly">Friendly Match</option>
            <option value="League">League Match</option>
            <option value="Championship">Championship Match</option>
          </Field>
          <ErrorMessage
            name="category"
            component="span"
            className="text-red-500"
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-5 lg:flex-row">
        <div className="flex w-full flex-col items-start justify-center lg:w-1/2">
          <label
            htmlFor="date"
            className="mb-2 block font-medium text-gray-900 lg:text-lg"
          >
            Date
          </label>
          <Field
            name="date"
            type="date"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-[gray-900] focus:border-accent focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-accent focus:ring-accent"
          />
          <ErrorMessage name="date" component="span" className="text-red-500" />
        </div>

        <div className="flex w-full flex-col items-start justify-center lg:w-1/2">
          <label
            htmlFor="startTime"
            className="mb-2 block font-medium text-gray-900 lg:text-lg"
          >
            Start Time
          </label>
          <Field
            name="startTime"
            type="time"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-[gray-900] focus:border-accent focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-accent focus:ring-accent"
          />
          <ErrorMessage
            name="startTime"
            component="span"
            className="text-red-500"
          />
        </div>

        <div className="flex w-full flex-col items-start justify-center lg:w-1/2">
          <label
            htmlFor="endTime"
            className="mb-2 block font-medium text-gray-900 lg:text-lg"
          >
            End Time
          </label>
          <Field
            name="endTime"
            type="time"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-[gray-900] focus:border-accent focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-accent focus:ring-accent"
          />
          <ErrorMessage
            name="endTime"
            component="span"
            className="text-red-500"
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-5 lg:flex-row">
        <div className="flex w-full flex-col items-start justify-center lg:w-1/2">
          <label
            htmlFor="location"
            className="mb-2 block font-medium text-gray-900 lg:text-lg"
          >
            Location
          </label>
          <Field
            name="location"
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-[gray-900] focus:border-accent focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-accent focus:ring-accent"
          />
          <ErrorMessage
            name="location"
            component="span"
            className="text-red-500"
          />
        </div>

        <div className="flex w-full flex-col items-start justify-center lg:w-1/2">
          <label
            htmlFor="venue"
            className="mb-2 block font-medium text-gray-900"
          >
            Venue
          </label>
          <Field
            name="venue"
            type="text"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-[gray-900] focus:border-accent focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-accent focus:ring-accent"
          />
          <ErrorMessage
            name="venue"
            component="span"
            className="text-red-500"
          />
        </div>
      </div>
    </div>
  );
}
