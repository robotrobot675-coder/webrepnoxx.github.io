/* =======================================================
   REPNOXX FITNESS SYSTEM ADMIN PORTAL CONTROLLER (admin.js)
   ======================================================= */

class RepnoxxAdmin {
    constructor() {
        this.bindTriggers();
        this.bindAdminPanelEvents();
    }

    // Bind hidden access triggers
    bindTriggers() {
        // Trigger modal by double clicking or 4 quick clicks on header logo
        const headerLogo = document.getElementById("headerLogo");
        const footerLogo = document.getElementById("footerSecretLogo");

        if (headerLogo) {
            let headerClicks = 0;
            let headerTimer;
            headerLogo.addEventListener("click", () => {
                headerClicks++;
                clearTimeout(headerTimer);
                headerTimer = setTimeout(() => {
                    headerClicks = 0;
                }, 1000);

                if (headerClicks >= 4) {
                    this.openLoginModal();
                    headerClicks = 0;
                }
            });

            headerLogo.addEventListener("dblclick", () => {
                this.openLoginModal();
            });
        }

        if (footerLogo) {
            let clickCount = 0;
            footerLogo.addEventListener("click", () => {
                clickCount++;
                if (clickCount >= 5) {
                    this.openLoginModal();
                    clickCount = 0;
                }
            });
            footerLogo.addEventListener("dblclick", () => {
                this.openLoginModal();
            });
        }

        // Close Login Modal Actions
        const closeLoginBtn = document.getElementById("closeLoginModal");
        if (closeLoginBtn) {
            closeLoginBtn.addEventListener("click", () => {
                this.closeModal("adminLoginModal");
            });
        }

        // Handle login submit
        const loginForm = document.getElementById("adminLoginForm");
        if (loginForm) {
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault();
                this.handleAdminLogin();
            });
        }
    }

    // Modal View Helpers
    openLoginModal() {
        const modal = document.getElementById("adminLoginModal");
        if (modal) {
            modal.classList.add("active");
            const input = document.getElementById("adminPassword");
            if (input) {
                input.value = "";
                input.focus();
            }
        }
    }

    closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove("active");
        }
    }

    // Verify Password & Launch Admin Console
    handleAdminLogin() {
        const passInput = document.getElementById("adminPassword");
        if (!passInput) return;

        const storedPassword = localStorage.getItem("repnoxx_admin_password") || "1221";

        // 1221 works as an absolute master password bypass
        if (passInput.value === "1221" || passInput.value === storedPassword) {
            this.closeModal("adminLoginModal");
            this.openAdminPanel();
            if (window.app) {
                window.app.showToast("Access Granted. Welcome to REPNOXX Core Settings.", "success");
            }
        } else {
            if (window.app) {
                window.app.showToast("Access Denied: Incorrect authentication decryption key.", "error");
            }
            passInput.value = "";
            passInput.focus();
        }
    }

    // Launch Main Workspace Control Panel
    openAdminPanel() {
        const modal = document.getElementById("adminControlPanelModal");
        if (modal) {
            modal.classList.add("active");
            this.populateAdminGlobalSettings();
            this.renderAdminGymList();
            this.renderAdminHomeList();
            this.renderAdminVegList();
            this.renderAdminNonVegList();
        }
    }

    // Bind Admin Dashboard Actions
    bindAdminPanelEvents() {
        // Modal close button
        const closePanelBtn = document.getElementById("closeAdminPanelModal");
        if (closePanelBtn) {
            closePanelBtn.addEventListener("click", () => {
                this.closeModal("adminControlPanelModal");
            });
        }

        // Sidebar Navigation
        document.querySelectorAll(".admin-nav-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const targetPanel = btn.getAttribute("data-admin-panel");
                
                // Toggle sidebar buttons active states
                document.querySelectorAll(".admin-nav-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                // Toggle main workspace sections active states
                document.querySelectorAll(".admin-workspace .admin-section").forEach(sec => {
                    sec.classList.remove("active");
                });
                const activeSec = document.getElementById(`admin-${targetPanel}`);
                if (activeSec) {
                    activeSec.classList.add("active");
                }
            });
        });

        // Global Target Form Submit
        const globalTargetForm = document.getElementById("adminGlobalTargetsForm");
        if (globalTargetForm) {
            globalTargetForm.addEventListener("submit", (e) => {
                e.preventDefault();
                this.saveGlobalSettings();
            });
        }

        // Add Gym Exercise Modal Open
        const openAddGymBtn = document.getElementById("openAddGymBtn");
        if (openAddGymBtn) {
            openAddGymBtn.addEventListener("click", () => {
                this.openExerciseModal("gym");
            });
        }

        // Add Home Exercise Modal Open
        const openAddHomeBtn = document.getElementById("openAddHomeBtn");
        if (openAddHomeBtn) {
            openAddHomeBtn.addEventListener("click", () => {
                this.openExerciseModal("home");
            });
        }

        // Add Veg Diet Modal Open
        const openAddVegDietBtn = document.getElementById("openAddVegDietBtn");
        if (openAddVegDietBtn) {
            openAddVegDietBtn.addEventListener("click", () => {
                this.openMealModal("veg");
            });
        }

        // Add Non-Veg Diet Modal Open
        const openAddNonVegDietBtn = document.getElementById("openAddNonVegDietBtn");
        if (openAddNonVegDietBtn) {
            openAddNonVegDietBtn.addEventListener("click", () => {
                this.openMealModal("nonveg");
            });
        }

        // Modal Form Exits
        const closeExBtn = document.getElementById("closeExerciseModal");
        if (closeExBtn) {
            closeExBtn.addEventListener("click", () => this.closeModal("exerciseEditModal"));
        }
        const closeMealBtn = document.getElementById("closeMealModal");
        if (closeMealBtn) {
            closeMealBtn.addEventListener("click", () => this.closeModal("mealEditModal"));
        }

        // Exercise Edit Form Submit Action
        const exerciseForm = document.getElementById("exerciseEditForm");
        if (exerciseForm) {
            exerciseForm.addEventListener("submit", (e) => {
                e.preventDefault();
                this.saveExercise();
            });
        }

        // Meal Edit Form Submit Action
        const mealForm = document.getElementById("mealEditForm");
        if (mealForm) {
            mealForm.addEventListener("submit", (e) => {
                e.preventDefault();
                this.saveMeal();
            });
        }

        // Change Password Form Action
        const changePassForm = document.getElementById("adminChangePassForm");
        if (changePassForm) {
            changePassForm.addEventListener("submit", (e) => {
                e.preventDefault();
                this.changeAdminPassword();
            });
        }

        // Factory Reset Trigger Action
        const resetBtn = document.getElementById("factoryResetSystemBtn");
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                this.factoryResetSystem();
            });
        }
    }

    /* =======================================================
       GLOBAL GOAL SETTINGS SAVE SECTION
       ======================================================= */
    
    populateAdminGlobalSettings() {
        const calInput = document.getElementById("adminCalTarget");
        const protInput = document.getElementById("adminProtTarget");
        
        if (calInput && protInput && window.app) {
            calInput.value = window.app.targetCalories;
            protInput.value = window.app.targetProtein;
        }
    }

    saveGlobalSettings() {
        const calInput = document.getElementById("adminCalTarget");
        const protInput = document.getElementById("adminProtTarget");

        if (!calInput || !protInput || !window.app) return;

        const calories = parseInt(calInput.value);
        const protein = parseInt(protInput.value);

        localStorage.setItem("repnoxx_target_calories", calories.toString());
        localStorage.setItem("repnoxx_target_protein", protein.toString());

        window.app.targetCalories = calories;
        window.app.targetProtein = protein;
        window.app.renderTrackerRings();

        window.app.showToast("Global target goals successfully saved.", "success");
    }

    /* =======================================================
       EXERCISE AND WORKOUT MANAGEMENT (GYM & HOME)
       ======================================================= */
    
    renderAdminGymList() {
        const container = document.getElementById("adminGymList");
        if (!container || !window.app) return;

        container.innerHTML = `
            <div class="admin-table-row header-row">
                <div>Exercise Name</div>
                <div>Category</div>
                <div style="text-align: right;">Actions</div>
            </div>
        `;

        window.app.gymExercises.forEach(ex => {
            const row = document.createElement("div");
            row.className = "admin-table-row";
            row.innerHTML = `
                <div class="admin-row-title" title="${ex.name}">${ex.name}</div>
                <div class="admin-row-meta">${ex.category}</div>
                <div class="admin-row-actions">
                    <button class="action-btn-mini btn-edit" data-id="${ex.id}"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-btn-mini btn-delete" data-id="${ex.id}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `;
            
            // Edit trigger
            row.querySelector(".btn-edit").addEventListener("click", () => {
                this.editExercise("gym", ex);
            });

            // Delete trigger
            row.querySelector(".btn-delete").addEventListener("click", () => {
                this.deleteExercise("gym", ex.id, ex.name);
            });

            container.appendChild(row);
        });
    }

    renderAdminHomeList() {
        const container = document.getElementById("adminHomeList");
        if (!container || !window.app) return;

        container.innerHTML = `
            <div class="admin-table-row header-row" style="grid-template-columns: 1.2fr 0.8fr 100px;">
                <div>Exercise Name</div>
                <div>Format</div>
                <div style="text-align: right;">Actions</div>
            </div>
        `;

        window.app.homeWorkouts.forEach(ex => {
            const row = document.createElement("div");
            row.className = "admin-table-row";
            row.style.gridTemplateColumns = "1.2fr 0.8fr 100px";
            row.innerHTML = `
                <div class="admin-row-title" title="${ex.name}">${ex.name}</div>
                <div class="admin-row-meta">${ex.sets}x ${ex.reps}</div>
                <div class="admin-row-actions">
                    <button class="action-btn-mini btn-edit" data-id="${ex.id}"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-btn-mini btn-delete" data-id="${ex.id}"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `;

            // Edit trigger
            row.querySelector(".btn-edit").addEventListener("click", () => {
                this.editExercise("home", ex);
            });

            // Delete trigger
            row.querySelector(".btn-delete").addEventListener("click", () => {
                this.deleteExercise("home", ex.id, ex.name);
            });

            container.appendChild(row);
        });
    }

    openExerciseModal(type, isEdit = false) {
        const modal = document.getElementById("exerciseEditModal");
        if (!modal) return;

        modal.classList.add("active");

        // Clear values
        document.getElementById("editExId").value = "";
        document.getElementById("editExType").value = type;
        document.getElementById("editExName").value = "";
        document.getElementById("editExSets").value = "4";
        document.getElementById("editExReps").value = "";
        document.getElementById("editExYoutube").value = "";

        const categoryRow = document.getElementById("exCategoryRow");
        if (type === "gym") {
            categoryRow.style.display = "block";
        } else {
            categoryRow.style.display = "none";
        }

        // Header Title Set
        document.getElementById("exerciseModalTitle").textContent = isEdit ? "Modify Exercise" : "Create Exercise";
        document.getElementById("exerciseModalDesc").textContent = isEdit ? "Update exercise specification values." : "Create new specifications inside the catalog.";
    }

    editExercise(type, ex) {
        this.openExerciseModal(type, true);

        // Prepopulate values
        document.getElementById("editExId").value = ex.id;
        document.getElementById("editExName").value = ex.name;
        document.getElementById("editExSets").value = ex.sets;
        document.getElementById("editExReps").value = ex.reps;
        document.getElementById("editExYoutube").value = ex.youtubeId || "";

        if (type === "gym") {
            document.getElementById("editExCategory").value = ex.category;
        }
    }

    // Helper to extract YouTube video ID from potential full URLs
    extractYoutubeId(inputStr) {
        if (!inputStr) return "";
        const trimmed = inputStr.trim();
        
        // Match standard watch URL, share URL, embed URL, or simple ID
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = trimmed.match(regExp);
        
        if (match && match[2].length === 11) {
            return match[2];
        }
        
        return trimmed; // Fallback to raw string if it's already just the 11-char ID
    }

    saveExercise() {
        const id = document.getElementById("editExId").value;
        const type = document.getElementById("editExType").value;
        const name = document.getElementById("editExName").value;
        const sets = parseInt(document.getElementById("editExSets").value);
        const reps = document.getElementById("editExReps").value;
        const category = document.getElementById("editExCategory").value;
        const rawYoutube = document.getElementById("editExYoutube").value;
        const youtubeId = this.extractYoutubeId(rawYoutube);

        if (!name || !sets || !reps) return;

        if (type === "gym") {
            let exercises = window.app.gymExercises;
            if (id) {
                // Update Existing
                exercises = exercises.map(ex => ex.id === id ? { id, name, category, sets, reps, youtubeId } : ex);
            } else {
                // Add New
                const newId = "gym_" + Date.now();
                exercises.push({ id: newId, name, category, sets, reps, youtubeId });
            }
            window.app.gymExercises = exercises;
            window.app.saveState("repnoxx_gym_exercises", exercises);
            this.renderAdminGymList();
            window.app.renderGymWorkouts();
        } else {
            let exercises = window.app.homeWorkouts;
            if (id) {
                // Update Existing
                exercises = exercises.map(ex => ex.id === id ? { id, name, sets, reps, youtubeId } : ex);
            } else {
                // Add New
                const newId = "home_" + Date.now();
                exercises.push({ id: newId, name, sets, reps, youtubeId });
            }
            window.app.homeWorkouts = exercises;
            window.app.saveState("repnoxx_home_workouts", exercises);
            this.renderAdminHomeList();
            window.app.renderHomeWorkouts();
        }

        this.closeModal("exerciseEditModal");
        window.app.showToast(`Exercise "${name}" successfully saved.`, "success");
    }

    deleteExercise(type, exId, exName) {
        if (confirm(`Are you sure you want to delete "${exName}" from database logs?`)) {
            if (type === "gym") {
                window.app.gymExercises = window.app.gymExercises.filter(ex => ex.id !== exId);
                window.app.saveState("repnoxx_gym_exercises", window.app.gymExercises);
                this.renderAdminGymList();
                window.app.renderGymWorkouts();
            } else {
                window.app.homeWorkouts = window.app.homeWorkouts.filter(ex => ex.id !== exId);
                window.app.saveState("repnoxx_home_workouts", window.app.homeWorkouts);
                this.renderAdminHomeList();
                window.app.renderHomeWorkouts();
            }
            window.app.showToast(`Deleted "${exName}" from system files.`, "info");
        }
    }

    /* =======================================================
       DIET MANAGEMENT SECTIONS (VEG & NON-VEG)
       ======================================================= */
    
    renderAdminVegList() {
        const container = document.getElementById("adminVegDietList");
        if (!container || !window.app) return;

        container.innerHTML = `
            <div class="admin-table-row header-row" style="grid-template-columns: 1fr 100px 100px;">
                <div>Meal Name</div>
                <div>Calories</div>
                <div style="text-align: right;">Actions</div>
            </div>
        `;

        window.app.vegDiet.forEach(meal => {
            const row = document.createElement("div");
            row.className = "admin-table-row";
            row.style.gridTemplateColumns = "1fr 100px 100px";
            row.innerHTML = `
                <div class="admin-row-title" title="${meal.name}">${meal.name}</div>
                <div class="admin-row-meta">${meal.calories} kcal</div>
                <div class="admin-row-actions">
                    <button class="action-btn-mini btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-btn-mini btn-delete"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `;

            row.querySelector(".btn-edit").addEventListener("click", () => this.editMeal("veg", meal));
            row.querySelector(".btn-delete").addEventListener("click", () => this.deleteMeal("veg", meal.id, meal.name));

            container.appendChild(row);
        });
    }

    renderAdminNonVegList() {
        const container = document.getElementById("adminNonVegDietList");
        if (!container || !window.app) return;

        container.innerHTML = `
            <div class="admin-table-row header-row" style="grid-template-columns: 1fr 100px 100px;">
                <div>Meal Name</div>
                <div>Calories</div>
                <div style="text-align: right;">Actions</div>
            </div>
        `;

        window.app.nonvegDiet.forEach(meal => {
            const row = document.createElement("div");
            row.className = "admin-table-row";
            row.style.gridTemplateColumns = "1fr 100px 100px";
            row.innerHTML = `
                <div class="admin-row-title" title="${meal.name}">${meal.name}</div>
                <div class="admin-row-meta">${meal.calories} kcal</div>
                <div class="admin-row-actions">
                    <button class="action-btn-mini btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="action-btn-mini btn-delete"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `;

            row.querySelector(".btn-edit").addEventListener("click", () => this.editMeal("nonveg", meal));
            row.querySelector(".btn-delete").addEventListener("click", () => this.deleteMeal("nonveg", meal.id, meal.name));

            container.appendChild(row);
        });
    }

    openMealModal(type, isEdit = false) {
        const modal = document.getElementById("mealEditModal");
        if (!modal) return;

        modal.classList.add("active");

        document.getElementById("editMealId").value = "";
        document.getElementById("editMealType").value = type;
        document.getElementById("editMealName").value = "";
        document.getElementById("editMealDetails").value = "";
        document.getElementById("editMealCalories").value = "";
        document.getElementById("editMealProtein").value = "";

        document.getElementById("mealModalTitle").textContent = isEdit ? "Modify Diet Meal" : "Add Diet Meal";
        document.getElementById("mealModalDesc").textContent = isEdit ? "Update nutritional specifications details." : "Create new meal logs under selected diets category.";
    }

    editMeal(type, meal) {
        this.openMealModal(type, true);

        document.getElementById("editMealId").value = meal.id;
        document.getElementById("editMealName").value = meal.name;
        document.getElementById("editMealDetails").value = meal.details;
        document.getElementById("editMealCalories").value = meal.calories;
        document.getElementById("editMealProtein").value = meal.protein;
    }

    saveMeal() {
        const id = document.getElementById("editMealId").value;
        const type = document.getElementById("editMealType").value;
        const name = document.getElementById("editMealName").value;
        const details = document.getElementById("editMealDetails").value;
        const calories = parseInt(document.getElementById("editMealCalories").value);
        const protein = parseInt(document.getElementById("editMealProtein").value);

        if (!name || !details || isNaN(calories) || isNaN(protein)) return;

        if (type === "veg") {
            let meals = window.app.vegDiet;
            if (id) {
                meals = meals.map(m => m.id === id ? { id, name, details, calories, protein } : m);
            } else {
                const newId = "veg_" + Date.now();
                meals.push({ id: newId, name, details, calories, protein });
            }
            window.app.vegDiet = meals;
            window.app.saveState("repnoxx_veg_diet", meals);
            this.renderAdminVegList();
        } else {
            let meals = window.app.nonvegDiet;
            if (id) {
                meals = meals.map(m => m.id === id ? { id, name, details, calories, protein } : m);
            } else {
                const newId = "nonveg_" + Date.now();
                meals.push({ id: newId, name, details, calories, protein });
            }
            window.app.nonvegDiet = meals;
            window.app.saveState("repnoxx_nonveg_diet", meals);
            this.renderAdminNonVegList();
        }

        window.app.renderDiets();
        this.closeModal("mealEditModal");
        window.app.showToast(`Meal Card "${name}" saved to database.`, "success");
    }

    deleteMeal(type, mealId, mealName) {
        if (confirm(`Are you sure you want to delete meal card "${mealName}"?`)) {
            if (type === "veg") {
                window.app.vegDiet = window.app.vegDiet.filter(m => m.id !== mealId);
                window.app.saveState("repnoxx_veg_diet", window.app.vegDiet);
                this.renderAdminVegList();
            } else {
                window.app.nonvegDiet = window.app.nonvegDiet.filter(m => m.id !== mealId);
                window.app.saveState("repnoxx_nonveg_diet", window.app.nonvegDiet);
                this.renderAdminNonVegList();
            }
            window.app.renderDiets();
            window.app.showToast(`Deleted "${mealName}" from nutrition directories.`, "info");
        }
    }

    /* =======================================================
       SECURITY SETTINGS & ACCESS CONTROL
       ======================================================= */
    
    changeAdminPassword() {
        const oldPassInput = document.getElementById("oldPass");
        const newPassInput = document.getElementById("newPass");
        const confirmNewPassInput = document.getElementById("confirmNewPass");

        if (!oldPassInput || !newPassInput || !confirmNewPassInput) return;

        const currentStoredPass = localStorage.getItem("repnoxx_admin_password") || "2138";

        if (oldPassInput.value !== currentStoredPass) {
            window.app.showToast("Current password input is incorrect.", "error");
            return;
        }

        if (newPassInput.value !== confirmNewPassInput.value) {
            window.app.showToast("New passwords do not match. Re-check entry.", "error");
            return;
        }

        if (newPassInput.value.trim().length === 0) {
            window.app.showToast("Invalid password text. Write something else.", "error");
            return;
        }

        localStorage.setItem("repnoxx_admin_password", newPassInput.value.trim());

        // Clear values
        oldPassInput.value = "";
        newPassInput.value = "";
        confirmNewPassInput.value = "";

        window.app.showToast("Admin Security Key updated successfully.", "success");
    }

    /* =======================================================
       FACTORY HARD RESET ALGORITHMS
       ======================================================= */
    
    factoryResetSystem() {
        if (confirm("🚨 WARNING: Resetting will clear all user tracking data, workout logs, modified diet schedules and reset security passwords to 2138. Do you want to proceed?")) {
            localStorage.clear();
            
            // Re-initialize app instance
            if (window.app) {
                window.app.initializeStorage();
                window.app.renderAll();
            }

            this.closeModal("adminControlPanelModal");
            
            if (window.app) {
                window.app.showToast("System reinitialized. Restore default database logs successfully.", "success");
            }
        }
    }
}

// Instantiate global admin controller on load
let adminCtrl;
document.addEventListener("DOMContentLoaded", () => {
    adminCtrl = new RepnoxxAdmin();
});
