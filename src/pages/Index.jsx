import React, { useState } from "react";
import { Box, Heading, Text, Button, Input, Textarea, Select, Checkbox, Grid, GridItem, Image, Flex, Spacer, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { FaPlus, FaComment, FaClock, FaChartBar } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "", assignee: "", deadline: "", completed: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ title: "", description: "", assignee: "", deadline: "", completed: false });
    onClose();
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <Box p={8}>
      <Flex align="center" mb={8}>
        <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMGxvZ298ZW58MHx8fHwxNzEyNjcwOTcyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Tush Logo" w={12} h={12} mr={4} />
        <Heading as="h1" size="xl">
          Tush Project Management
        </Heading>
        <Spacer />
        <IconButton icon={<FaPlus />} onClick={onOpen} aria-label="Add Task" />
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {tasks.map((task, index) => (
          <GridItem key={index} borderWidth={1} borderRadius="lg" p={4}>
            <Checkbox isChecked={task.completed} onChange={() => handleToggleComplete(index)} mb={2}>
              <Text as={task.completed ? "del" : "span"}>{task.title}</Text>
            </Checkbox>
            <Text fontSize="sm" color="gray.500" mb={2}>
              {task.description}
            </Text>
            <Flex align="center">
              <Text fontSize="sm" fontWeight="bold" mr={2}>
                Assignee:
              </Text>
              <Text fontSize="sm">{task.assignee}</Text>
            </Flex>
            <Flex align="center" mt={2}>
              <Text fontSize="sm" fontWeight="bold" mr={2}>
                Deadline:
              </Text>
              <Text fontSize="sm">{task.deadline}</Text>
            </Flex>
          </GridItem>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Task</ModalHeader>
          <ModalBody>
            <Input name="title" value={newTask.title} onChange={handleInputChange} placeholder="Task Title" mb={4} />
            <Textarea name="description" value={newTask.description} onChange={handleInputChange} placeholder="Task Description" mb={4} />
            <Select name="assignee" value={newTask.assignee} onChange={handleInputChange} placeholder="Select Assignee" mb={4}>
              <option value="John">John</option>
              <option value="Jane">Jane</option>
              <option value="Mike">Mike</option>
            </Select>
            <Input name="deadline" value={newTask.deadline} onChange={handleInputChange} placeholder="Deadline (YYYY-MM-DD)" mb={4} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleAddTask}>
              Add Task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex mt={8}>
        <Box flex={1} p={4} borderWidth={1} borderRadius="lg">
          <Flex align="center" mb={4}>
            <FaComment size={20} />
            <Heading as="h2" size="md" ml={2}>
              Collaboration
            </Heading>
          </Flex>
          <Text>Real-time chat, commenting, and file sharing for smooth teamwork.</Text>
        </Box>
        <Box flex={1} p={4} borderWidth={1} borderRadius="lg" mx={4}>
          <Flex align="center" mb={4}>
            <FaClock size={20} />
            <Heading as="h2" size="md" ml={2}>
              Time Tracking
            </Heading>
          </Flex>
          <Text>Monitor task duration with timers and manual entry.</Text>
        </Box>
        <Box flex={1} p={4} borderWidth={1} borderRadius="lg">
          <Flex align="center" mb={4}>
            <FaChartBar size={20} />
            <Heading as="h2" size="md" ml={2}>
              Analytics
            </Heading>
          </Flex>
          <Text>Track project progress and team performance with visual reports.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
