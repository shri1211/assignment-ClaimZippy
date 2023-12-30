import React, { useRef, useState } from "react";
import { Task } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import Modal from "./Modal";

const InputCheckbox: React.FC<{
  label: string;
  isChecked: boolean;
  setChecked: (value: React.SetStateAction<boolean>) => void;
}> = ({ isChecked, setChecked, label }) => {
  return (
    <label className="mb-0 flex items-center cursor-pointer">
      <div className="mr-2 bg-slate-300/[.5] dark:bg-slate-800 w-5 h-5 rounded-full grid place-items-center border border-slate-300 dark:border-slate-700">
        {isChecked && (
          <span className="bg-rose-500 w-2 h-2 block rounded-full"></span>
        )}
      </div>
      <span className="order-1 flex-1">{label}</span>
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={() => setChecked((prev: boolean) => !prev)}
      />
    </label>
  );
};

const ModalCreateTask: React.FC<{
  onClose: () => void;
  task?: Task;
  nameForm: string;
  onConfirm: (task: Task) => void;
}> = ({ onClose, task, nameForm, onConfirm }) => {
  const directories = useAppSelector((state) => state.tasks.directories);

  const today: Date = new Date();
  let day: number = today.getDate();
  let month: number = today.getMonth() + 1;
  const year: number = today.getFullYear();
  if (day < 10) {
    day = +("0" + day);
  }
  if (month < 10) {
    month = +("0" + month);
  }

  const todayDate: string = year + "-" + month + "-" + day;
  const maxDate: string = year + 1 + "-" + month + "-" + day;

  const [description, setDescription] = useState<string>(() => {
    if (task) {
      return task.description;
    }
    return "";
  });
  const [title, setTitle] = useState<string>(() => {
    if (task) {
      return task.title;
    }
    return "";
  });
  const [date, setDate] = useState<string>(() => {
    if (task) {
      return task.date;
    }
    return todayDate;
  });
  const isTitleValid = useRef<boolean>(true);
  const isDescriptionValid = useRef<boolean>(true);
  const [titleError, setTitleError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const [isImportant, setIsImportant] = useState<boolean>(() => {
    if (task) {
      return task.important;
    }
    return false;
  });

  const [isCompleted, setIsCompleted] = useState<boolean>(() => {
    if (task) {
      return task.completed;
    }
    return false;
  });

  const [selectedDirectory, setSelectedDirectory] = useState<string>(() => {
    if (task) {
      return task.dir;
    }
    return directories[0];
  });

  const validateTitle = () => {
    const trimmedTitle = title.trim();
    isTitleValid.current = trimmedTitle.length > 0 && trimmedTitle.length <= 30;

    if (!isTitleValid.current) {
      setTitleError(
        "Title cannot be empty and must be less than 30 characters."
      );
    } else {
      setTitleError(null);
    }
  };

  const validateDescription = () => {
    isDescriptionValid.current = description.trim().length > 0;

    if (!isDescriptionValid.current) {
      setDescriptionError("Description cannot be empty.");
    } else {
      setDescriptionError(null);
    }
  };

  const addNewTaskHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    validateTitle();
    validateDescription();

    if (isTitleValid.current && isDescriptionValid.current) {
      const newTask: Task = {
        title: title,
        dir: selectedDirectory,
        description: description,
        date: date,
        completed: isCompleted,
        important: isImportant,
        id: task?.id ? task.id : Date.now().toString(),
      };
      onConfirm(newTask);
      onClose();
    } else {
      setFormError("Please fill in all required fields.");
    }
  };

  return (
    <Modal
      onClose={() => {
        onClose();
        setFormError(null);
      }}
      title={nameForm}
    >
      <form
        className="flex flex-col stylesInputsField"
        onSubmit={addNewTaskHandler}
        noValidate
      >
        {formError && <div className="text-red-500 mb-2">{formError}</div>}

        <label>
          Title
          <input
            type="text"
            placeholder="e.g, study for the test"
            required
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            onBlur={validateTitle}
            className="w-full"
            maxLength={30}
          />
          {titleError && <span className="text-red-500">{titleError}</span>}
        </label>

        <label>
          Description
          <textarea
            placeholder="e.g, study for the test"
            className="w-full"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
            onBlur={validateDescription}
            required
            maxLength={200}
          ></textarea>
          {descriptionError && (
            <span className="text-red-500">{descriptionError}</span>
          )}
        </label>

        <button type="submit" className="btn mt-5">
          {nameForm}
        </button>
      </form>
    </Modal>
  );
};

export default ModalCreateTask;
