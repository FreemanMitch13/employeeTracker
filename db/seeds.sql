INSERT INTO department (id, department_name)
VALUES  (1, "Administration"),
        (2, "Operations"),
        (3, "Human Resources"),
        (4, "Marketing"),
        (5, "Sales");
        
INSERT INTO role (id, title, salary, department_id)
VALUES  (1, "Manager", 100000, 1),
        (2, "Engineer", 75000, 2),
        (3, "HR Specialist", 70000, 3),
        (4, "Marketing Director", 80000,4),
        (5, "Sales Manager", 65000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
Values  (1, "Mitchell", "Freeman", 1, NULL),
        (2, "Sebastian", "Mendez", 4, 1),
        (3, "Bruce", "Harris", 2, 1),
        (4, "Brandi", "Scott", 3, 1),
        (5, "Kuvvat", "Jorayev", 5, 1); 