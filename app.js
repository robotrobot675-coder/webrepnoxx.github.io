/* ====================================================
   REPNOXX FITNESS APPLICATION STATE CONTROLLER (app.js)
   ==================================================== */

// Default Dataset Constants
const DEFAULT_GYM_EXERCISES = [
    { id: "gym_1", name: "Barbell Flat Bench Press", category: "Chest & Triceps", sets: 4, reps: "8-12", youtubeId: "rT7DgCrgWys" },
    { id: "gym_2", name: "Incline Dumbbell Press", category: "Chest & Triceps", sets: 3, reps: "10-12", youtubeId: "8iPEnNp_kA0" },
    { id: "gym_3", name: "Cable Chest Flyes", category: "Chest & Triceps", sets: 3, reps: "15", youtubeId: "Iwe6AmxVf2o" },
    { id: "gym_4", name: "Tricep Overhead Rope Press", category: "Chest & Triceps", sets: 3, reps: "12-15", youtubeId: "ns-WG4Huk_4" },
    { id: "gym_5", name: "Weighted Bench Dips", category: "Chest & Triceps", sets: 3, reps: "12", youtubeId: "3G4yV2Kscys" },
    { id: "gym_6", name: "Barbell Conventional Deadlift", category: "Back & Biceps", sets: 3, reps: "5", youtubeId: "op9kVnSso6Q" },
    { id: "gym_7", name: "Wide-Grip Lat Pulldowns", category: "Back & Biceps", sets: 4, reps: "10-12", youtubeId: "CAwf7n6Luuc" },
    { id: "gym_8", name: "Chest-Supported Dumbbell Rows", category: "Back & Biceps", sets: 3, reps: "8-12", youtubeId: "H75im9fA194" },
    { id: "gym_9", name: "Barbell Bicep Curls", category: "Back & Biceps", sets: 3, reps: "10-12", youtubeId: "ykJgr1xhXEw" },
    { id: "gym_10", name: "Dumbbell Hammer Curls", category: "Back & Biceps", sets: 3, reps: "12-15", youtubeId: "zC3nLlEvin4" },
    { id: "gym_11", name: "Overhead Barbell Military Press", category: "Shoulders & Abs", sets: 4, reps: "8-10", youtubeId: "2yjwXT-HYz0" },
    { id: "gym_12", name: "Standing Dumbbell Lateral Raises", category: "Shoulders & Abs", sets: 4, reps: "15-20", youtubeId: "3VcKaXtougg" },
    { id: "gym_13", name: "Cable Face Pulls", category: "Shoulders & Abs", sets: 3, reps: "15", youtubeId: "V8dZ3Kj5wO8" },
    { id: "gym_14", name: "Hanging Knee/Leg Raises", category: "Shoulders & Abs", sets: 3, reps: "15", youtubeId: "jO5e8R8-Puk" },
    { id: "gym_15", name: "Barbell Back Squats", category: "Legs", sets: 4, reps: "8-10", youtubeId: "ultW1wiOPM0" },
    { id: "gym_16", name: "Romanian Deadlifts", category: "Legs", sets: 3, reps: "10-12", youtubeId: "2SHskDKIclM" },
    { id: "gym_17", name: "Leg Press (Plate Loaded)", category: "Legs", sets: 3, reps: "10-12", youtubeId: "yZmx_Ac3880" },
    { id: "gym_18", name: "Standing Calf Machine Raises", category: "Legs", sets: 4, reps: "15-20", youtubeId: "-M4-G8DNn8c" }
];

const DEFAULT_HOME_WORKOUTS = [
    { id: "home_1", name: "Standard Bodyweight Push-ups", sets: 4, reps: "15-20", youtubeId: "IODxDxX7oi4" },
    { id: "home_2", name: "Decline Push-ups (Feet Raised)", sets: 3, reps: "12-15", youtubeId: "SKPDIW16hOk" },
    { id: "home_3", name: "Bodyweight Air Squats", sets: 4, reps: "20-25", youtubeId: "a7P-J4d0fGg" },
    { id: "home_4", name: "Pike Push-ups (Shoulders)", sets: 3, reps: "8-12", youtubeId: "sposDXII0Bg" },
    { id: "home_5", name: "Alternating Walking Lunges", sets: 3, reps: "15 per leg", youtubeId: "L81YLn26Fqo" },
    { id: "home_6", name: "Elbow Plank Hold", sets: 3, reps: "60 seconds", youtubeId: "B296mPDtOIE" },
    { id: "home_7", name: "Mountain Climbers (Core)", sets: 3, reps: "45 seconds", youtubeId: "kLh-5ElvIjo" },
    { id: "home_8", name: "Burpees (Cardio Explosive)", sets: 3, reps: "10-12", youtubeId: "dZgVxmf6jkA" }
];

const DEFAULT_VEG_DIET = [
    { id: "veg_1", name: "Meal 1 - Breakfast Powerhouse", details: "High-Protein Oats: 50g rolled oats cooked in 250ml soy milk, topped with 1.5 scoops Whey Isolate, 1 tbsp peanut butter, 1 sliced banana, and 10g chia seeds.", calories: 580, protein: 45 },
    { id: "veg_2", name: "Meal 2 - Mid-Day Muscle Roll", details: "120g low-fat Paneer (or firm Tofu) cubed and sautéed with capsicum, tomatoes, spices, wrapped in a whole-wheat multigrain chapati.", calories: 390, protein: 22 },
    { id: "veg_3", name: "Meal 3 - Anabolic Rice Lunch", details: "High-Protein Chole Curry: 1 cup boiled chickpeas cooked with spinach curry, served with 1 cup cooked brown rice, and 150g low-fat Greek yogurt or fresh curd.", calories: 540, protein: 24 },
    { id: "veg_4", name: "Meal 4 - Pre-Workout Energy Booster", details: "Sattu Power Shake (30g roasted chickpea flour in cold water with a pinch of black salt/lemon) served with 15 almonds and 1 medium apple.", calories: 280, protein: 12 },
    { id: "veg_5", name: "Meal 5 - Post-Workout Recovery Dinner", details: "Soya Chunk Stir-fry: 50g soya chunks (boiled and squeezed), tossed with broccoli, mushrooms, carrots, and soy sauce, served with 1 cup cooked Quinoa.", calories: 510, protein: 37 }
];

const DEFAULT_NONVEG_DIET = [
    { id: "nonveg_1", name: "Meal 1 - Breakfast Egg Scramble", details: "6 Egg White & 2 Whole Egg scramble cooked with spinach and mushrooms, served with 2 slices of whole-wheat sourdough toast and half an avocado.", calories: 460, protein: 36 },
    { id: "nonveg_2", name: "Meal 2 - Mid-Day Grilled Fuel", details: "150g Grilled Chicken Breast strips tossed with mixed greens (cucumber, olives, bell peppers) and 1 tbsp olive oil vinaigrette dressing.", calories: 340, protein: 35 },
    { id: "nonveg_3", name: "Meal 3 - Omega-3 Rice Lunch", details: "150g Pan-seared Salmon fillet (or Tilapia/Cod) seasoned with lemon herb, served alongside 150g baked sweet potato mash and steamed broccoli.", calories: 580, protein: 42 },
    { id: "nonveg_4", name: "Meal 4 - Pre-Workout Carbs & Protein", details: "3 Whole Rice cakes topped with 1.5 tbsp peanut butter, 1 sliced banana, and a cup of black coffee.", calories: 260, protein: 8 },
    { id: "nonveg_5", name: "Meal 5 - Post-Workout Recovery Dinner", details: "200g Lean Chicken Mince cooked in garlic and herbs, served with 1.5 cups cooked Jasmine white rice, and sautéed green beans.", calories: 660, protein: 48 }
];

// AI Food Nutrition Knowledge Base
// Maps detected food keywords to calories and protein per typical serving
const FOOD_NUTRITION_MAP = {
    pizza: { calories: 285, protein: 12, serving: "1 slice" },
    calzone: { calories: 540, protein: 22, serving: "1 calzone" },
    hamburger: { calories: 540, protein: 25, serving: "1 burger" },
    cheeseburger: { calories: 550, protein: 26, serving: "1 burger" },
    hotdog: { calories: 290, protein: 10, serving: "1 hot dog" },
    sandwich: { calories: 380, protein: 18, serving: "1 sandwich" },
    burrito: { calories: 590, protein: 24, serving: "1 burrito" },
    taco: { calories: 226, protein: 10, serving: "1 taco" },
    nachos: { calories: 520, protein: 14, serving: "per serving" },
    soup: { calories: 160, protein: 8, serving: "1 bowl" },
    stew: { calories: 240, protein: 18, serving: "1 bowl" },
    salad: { calories: 120, protein: 5, serving: "1 bowl" },
    "green salad": { calories: 80, protein: 4, serving: "1 bowl" },
    "fruit salad": { calories: 150, protein: 2, serving: "1 bowl" },
    bread: { calories: 265, protein: 9, serving: "100g" },
    "french bread": { calories: 270, protein: 10, serving: "100g" },
    croissant: { calories: 406, protein: 8, serving: "1 croissant" },
    bagel: { calories: 245, protein: 10, serving: "1 bagel" },
    pancake: { calories: 310, protein: 8, serving: "2 pancakes" },
    waffle: { calories: 290, protein: 7, serving: "1 waffle" },
    rice: { calories: 206, protein: 4, serving: "1 cup" },
    "fried rice": { calories: 320, protein: 6, serving: "1 cup" },
    pasta: { calories: 350, protein: 12, serving: "1 cup" },
    spaghetti: { calories: 350, protein: 12, serving: "1 cup" },
    macaroni: { calories: 340, protein: 11, serving: "1 cup" },
    lasagna: { calories: 380, protein: 18, serving: "1 slice" },
    noodles: { calories: 280, protein: 8, serving: "1 cup" },
    chicken: { calories: 284, protein: 53, serving: "200g breast" },
    "chicken breast": { calories: 284, protein: 53, serving: "200g" },
    "chicken leg": { calories: 258, protein: 30, serving: "1 leg" },
    "chicken wing": { calories: 203, protein: 26, serving: "4 wings" },
    turkey: { calories: 240, protein: 46, serving: "200g" },
    duck: { calories: 337, protein: 24, serving: "200g" },
    fish: { calories: 206, protein: 40, serving: "200g fillet" },
    salmon: { calories: 367, protein: 40, serving: "200g fillet" },
    tuna: { calories: 198, protein: 44, serving: "200g" },
    cod: { calories: 160, protein: 36, serving: "200g" },
    shrimp: { calories: 168, protein: 36, serving: "200g" },
    lobster: { calories: 180, protein: 38, serving: "200g" },
    crab: { calories: 174, protein: 36, serving: "200g" },
    beef: { calories: 334, protein: 50, serving: "200g" },
    steak: { calories: 408, protein: 52, serving: "200g" },
    "roast beef": { calories: 280, protein: 46, serving: "200g" },
    pork: { calories: 320, protein: 42, serving: "200g" },
    ribs: { calories: 420, protein: 38, serving: "200g" },
    lamb: { calories: 365, protein: 46, serving: "200g" },
    bacon: { calories: 290, protein: 22, serving: "3 slices" },
    eggs: { calories: 155, protein: 13, serving: "2 eggs" },
    omelette: { calories: 280, protein: 20, serving: "2-egg omelette" },
    "egg sandwich": { calories: 340, protein: 18, serving: "1 sandwich" },
    cheese: { calories: 400, protein: 25, serving: "100g" },
    butter: { calories: 717, protein: 1, serving: "100g" },
    milk: { calories: 150, protein: 8, serving: "1 cup" },
    yogurt: { calories: 150, protein: 12, serving: "1 cup" },
    icecream: { calories: 270, protein: 5, serving: "1 scoop" },
    "ice cream": { calories: 270, protein: 5, serving: "1 scoop" },
    cake: { calories: 350, protein: 5, serving: "1 slice" },
    cupcake: { calories: 280, protein: 3, serving: "1 cupcake" },
    donut: { calories: 310, protein: 5, serving: "1 donut" },
    doughnut: { calories: 310, protein: 5, serving: "1 donut" },
    cookie: { calories: 150, protein: 2, serving: "1 cookie" },
    biscuit: { calories: 170, protein: 3, serving: "1 biscuit" },
    pie: { calories: 320, protein: 4, serving: "1 slice" },
    pizza: { calories: 285, protein: 12, serving: "1 slice" },
    apple: { calories: 95, protein: 0.5, serving: "1 medium" },
    banana: { calories: 105, protein: 1.3, serving: "1 medium" },
    orange: { calories: 62, protein: 1.2, serving: "1 medium" },
    grapes: { calories: 104, protein: 1.1, serving: "1 cup" },
    strawberry: { calories: 50, protein: 1, serving: "1 cup" },
    blueberries: { calories: 84, protein: 1.1, serving: "1 cup" },
    watermelon: { calories: 46, protein: 0.9, serving: "1 cup" },
    mango: { calories: 150, protein: 1.4, serving: "1 cup" },
    pineapple: { calories: 82, protein: 0.9, serving: "1 cup" },
    avocado: { calories: 240, protein: 3, serving: "1 avocado" },
    potato: { calories: 161, protein: 4.3, serving: "1 medium" },
    "french fries": { calories: 365, protein: 4, serving: "medium fries" },
    "sweet potato": { calories: 180, protein: 4, serving: "1 medium" },
    fries: { calories: 365, protein: 4, serving: "medium" },
    chips: { calories: 536, protein: 7, serving: "100g" },
    popcorn: { calories: 387, protein: 13, serving: "100g" },
    nuts: { calories: 600, protein: 20, serving: "100g" },
    almonds: { calories: 575, protein: 21, serving: "100g" },
    peanuts: { calories: 567, protein: 26, serving: "100g" },
    "peanut butter": { calories: 588, protein: 25, serving: "100g" },
    beans: { calories: 130, protein: 9, serving: "1 cup" },
    lentils: { calories: 230, protein: 18, serving: "1 cup" },
    chickpea: { calories: 270, protein: 15, serving: "1 cup" },
    tofu: { calories: 144, protein: 17, serving: "200g" },
    paneer: { calories: 320, protein: 22, serving: "150g" },
    oats: { calories: 307, protein: 11, serving: "100g" },
    cereal: { calories: 210, protein: 5, serving: "1 cup" },
    "rice cake": { calories: 100, protein: 2, serving: "2 cakes" },
    sushi: { calories: 200, protein: 8, serving: "6 pieces" },
    "mashed potato": { calories: 170, protein: 4, serving: "1 cup" },
    curry: { calories: 320, protein: 18, serving: "1 cup" },
    chili: { calories: 300, protein: 22, serving: "1 cup" },
    meatball: { calories: 220, protein: 16, serving: "5 meatballs" },
    wonton: { calories: 180, protein: 8, serving: "6 wontons" },
    dumpling: { calories: 200, protein: 10, serving: "6 dumplings" },
    "egg roll": { calories: 200, protein: 6, serving: "1 roll" },
    springroll: { calories: 160, protein: 5, serving: "2 rolls" },
    falafel: { calories: 320, protein: 13, serving: "6 pieces" },
    hummus: { calories: 160, protein: 8, serving: "100g" },
    guacamole: { calories: 150, protein: 2, serving: "100g" },
    "masa corn": { calories: 210, protein: 5, serving: "1 cup" },
    porridge: { calories: 260, protein: 10, serving: "1 bowl" },
    oatmeal: { calories: 307, protein: 11, serving: "100g" },
    smoothie: { calories: 250, protein: 12, serving: "1 glass" },
    "potato salad": { calories: 200, protein: 4, serving: "1 cup" },
    "egg roll": { calories: 200, protein: 6, serving: "1 roll" },
    quesadilla: { calories: 350, protein: 14, serving: "1 quesadilla" },
    crepe: { calories: 180, protein: 6, serving: "1 crepe" },
    souffle: { calories: 180, protein: 6, serving: "1 souffle" },
    pudding: { calories: 200, protein: 4, serving: "1 cup" },
    custard: { calories: 220, protein: 6, serving: "1 cup" },
    default: { calories: 250, protein: 15, serving: "per serving" }
};

// Quick-Select Foods for manual override when AI is uncertain
const QUICK_SELECT_FOODS = [
    { label: "Chicken Breast", kcal: 284, prot: 53, icon: "drumstick-bite" },
    { label: "Eggs (2)", kcal: 155, prot: 13, icon: "egg" },
    { label: "Salmon", kcal: 367, prot: 40, icon: "fish" },
    { label: "Beef Steak", kcal: 408, prot: 52, icon: "cow" },
    { label: "Shrimp", kcal: 168, prot: 36, icon: "shrimp" },
    { label: "Pork Chop", kcal: 320, prot: 42, icon: "bacon" },
    { label: "Tofu", kcal: 144, prot: 17, icon: "seedling" },
    { label: "Paneer", kcal: 320, prot: 22, icon: "cheese" },
    { label: "Rice (1 cup)", kcal: 206, prot: 4, icon: "bowl-food" },
    { label: "Pasta", kcal: 350, prot: 12, icon: "plate-wheat" },
    { label: "Bread (2 slice)", kcal: 265, prot: 9, icon: "bread-slice" },
    { label: "Oats", kcal: 307, prot: 11, icon: "seedling" },
    { label: "Sweet Potato", kcal: 180, prot: 4, icon: "carrot" },
    { label: "French Fries", kcal: 365, prot: 4, icon: "plate-wheat" },
    { label: "Pizza (1 slice)", kcal: 285, prot: 12, icon: "pizza-slice" },
    { label: "Burger", kcal: 540, prot: 25, icon: "hamburger" },
    { label: "Salad", kcal: 120, prot: 5, icon: "leaf" },
    { label: "Sandwich", kcal: 380, prot: 18, icon: "bread-slice" },
    { label: "Curry Bowl", kcal: 320, prot: 18, icon: "bowl-food" },
    { label: "Sushi (6pc)", kcal: 200, prot: 8, icon: "fish" },
    { label: "Soup", kcal: 160, prot: 8, icon: "mug-hot" },
    { label: "Burrito", kcal: 590, prot: 24, icon: "wrap" },
    { label: "Banana", kcal: 105, prot: 1.3, icon: "apple-whole" },
    { label: "Apple", kcal: 95, prot: 0.5, icon: "apple-whole" },
    { label: "Orange", kcal: 62, prot: 1.2, icon: "citrus" },
    { label: "Grapes (1 cup)", kcal: 104, prot: 1.1, icon: "wine-bottle" },
    { label: "Mango", kcal: 150, prot: 1.4, icon: "apple-whole" },
    { label: "Avocado", kcal: 240, prot: 3, icon: "seedling" },
    { label: "Mixed Berries", kcal: 70, prot: 1, icon: "apple-whole" },
    { label: "Watermelon", kcal: 46, prot: 0.9, icon: "apple-whole" },
    { label: "Milk (1 cup)", kcal: 150, prot: 8, icon: "glass-water" },
    { label: "Greek Yogurt", kcal: 150, prot: 12, icon: "jar" },
    { label: "Cheese (100g)", kcal: 400, prot: 25, icon: "cheese" },
    { label: "Protein Shake", kcal: 250, prot: 30, icon: "cup-straw" },
    { label: "Smoothie", kcal: 250, prot: 12, icon: "cup-straw" },
    { label: "Nuts (handful)", kcal: 180, prot: 6, icon: "seedling" },
    { label: "Peanut Butter", kcal: 190, prot: 8, icon: "jar" },
    { label: "Protein Bar", kcal: 220, prot: 20, icon: "candy" },
    { label: "Cookies (2)", kcal: 300, prot: 4, icon: "cookie-bite" },
    { label: "Dark Chocolate", kcal: 170, prot: 2, icon: "candy" },
    { label: "Popcorn", kcal: 120, prot: 4, icon: "popcorn" }
];

// Non-food keywords to filter out from MobileNet classification
const NON_FOOD_KEYWORDS = [
    "plate", "bowl", "cup", "glass", "table", "hand", "finger",
    "spoon", "fork", "knife", "napkin", "tray", "bottle", "jar", "container",
    "box", "bag", "packet", "wrapper", "counter", "shelf", "towel",
    "wall", "floor", "curtain", "lamp", "chair", "sofa", "tablecloth", "placemat",
    "plastic", "paper", "wooden", "metal", "ceramic"
];

const FOOD_CATEGORY_MAP = [
    { label: "— PROTEINS —", isLabel: true },
    "Chicken Breast", "Eggs (2)", "Salmon", "Beef Steak", "Shrimp", "Pork Chop", "Tofu", "Paneer",
    { label: "— CARBS —", isLabel: true },
    "Rice (1 cup)", "Pasta", "Bread (2 slice)", "Oats", "Sweet Potato", "French Fries",
    { label: "— MEALS —", isLabel: true },
    "Pizza (1 slice)", "Burger", "Salad", "Sandwich", "Curry Bowl", "Sushi (6pc)", "Soup", "Burrito",
    { label: "— FRUITS —", isLabel: true },
    "Banana", "Apple", "Orange", "Grapes (1 cup)", "Mango", "Avocado", "Mixed Berries", "Watermelon",
    { label: "— DAIRY & DRINKS —", isLabel: true },
    "Milk (1 cup)", "Greek Yogurt", "Cheese (100g)", "Protein Shake", "Smoothie",
    { label: "— SNACKS —", isLabel: true },
    "Nuts (handful)", "Peanut Butter", "Protein Bar", "Cookies (2)", "Dark Chocolate", "Popcorn"
];

// App State Manager
class RepnoxxApp {
    constructor() {
        try {
            this.initializeStorage();
            this.bindEvents();
            this.renderAll();
        } catch (e) {
            console.error("REPNOXX Critical: App crashed during load. Resetting storage to recover.", e);
            try {
                localStorage.clear();
                this.initializeStorage();
                this.bindEvents();
                this.renderAll();
            } catch (innerError) {
                console.error("REPNOXX Critical: Recovery failed.", innerError);
            }
        }
    }

    // Safe localStorage parsing helper
    safeParseStorage(key, defaultValue) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.warn(`REPNOXX Warning: Failed to parse storage key "${key}". Using defaults.`, e);
            return defaultValue;
        }
    }

    // Initialize LocalStorage
    initializeStorage() {
        try {
            // Only write defaults once — preserve admin edits on subsequent loads
            if (!localStorage.getItem("repnoxx_initialized")) {
                localStorage.setItem("repnoxx_gym_exercises", JSON.stringify(DEFAULT_GYM_EXERCISES));
                localStorage.setItem("repnoxx_home_workouts", JSON.stringify(DEFAULT_HOME_WORKOUTS));
                localStorage.setItem("repnoxx_veg_diet", JSON.stringify(DEFAULT_VEG_DIET));
                localStorage.setItem("repnoxx_nonveg_diet", JSON.stringify(DEFAULT_NONVEG_DIET));
                localStorage.setItem("repnoxx_target_calories", "2500");
                localStorage.setItem("repnoxx_target_protein", "150");
                localStorage.setItem("repnoxx_logged_meals", JSON.stringify([]));
                localStorage.setItem("repnoxx_workout_sets_state", JSON.stringify({}));
                localStorage.setItem("repnoxx_admin_password", "1221");
                localStorage.setItem("repnoxx_initialized", "true");
            } else if (localStorage.getItem("repnoxx_admin_password") === "2138") {
                localStorage.setItem("repnoxx_admin_password", "1221");
            }
        } catch (e) {
            console.error("REPNOXX Error: LocalStorage write blocked.", e);
        }

        // Load into instance variables with safe parsing
        this.gymExercises = this.safeParseStorage("repnoxx_gym_exercises", DEFAULT_GYM_EXERCISES);
        this.homeWorkouts = this.safeParseStorage("repnoxx_home_workouts", DEFAULT_HOME_WORKOUTS);
        this.vegDiet = this.safeParseStorage("repnoxx_veg_diet", DEFAULT_VEG_DIET);
        this.nonvegDiet = this.safeParseStorage("repnoxx_nonveg_diet", DEFAULT_NONVEG_DIET);

        this.targetCalories = parseInt(localStorage.getItem("repnoxx_target_calories")) || 2500;
        this.targetProtein = parseInt(localStorage.getItem("repnoxx_target_protein")) || 150;
        this.loggedMeals = this.safeParseStorage("repnoxx_logged_meals", []);
        this.setsState = this.safeParseStorage("repnoxx_workout_sets_state", {});

        this.currentGymFilter = "all";
        this.activeDietType = "veg";
    }

    // Set storage updates
    saveState(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    }

    // Bind UI Event Listeners
    bindEvents() {
        // Tab switching routing
        document.querySelectorAll(".nav-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const targetTab = btn.getAttribute("data-tab");
                this.switchTab(targetTab);
                document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
            });
        });

        // Food Logging Submit
        const logForm = document.getElementById("foodLogForm");
        if (logForm) {
            logForm.addEventListener("submit", (e) => {
                e.preventDefault();
                this.handleFoodLogSubmit();
            });
        }

        // Clear Logs Action
        const clearBtn = document.getElementById("clearLogsBtn");
        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                this.clearLoggedMeals();
            });
        }

        // Gym Workout Category Filters
        document.querySelectorAll("#gymFilters .filter-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll("#gymFilters .filter-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                this.currentGymFilter = btn.getAttribute("data-filter");
                this.renderGymWorkouts();
            });
        });

        // TDEE Calculator Button Action
        const calcBtn = document.getElementById("calculateMacrosBtn");
        if (calcBtn) {
            calcBtn.addEventListener("click", () => {
                this.calculateTDEE();
            });
        }

        // Apply TDEE Calculator Targets
        const applyTargetsBtn = document.getElementById("applyTargetsBtn");
        if (applyTargetsBtn) {
            applyTargetsBtn.addEventListener("click", () => {
                this.applyCalculatorTargets();
            });
        }

        // Diet Sub-Tab Toggles
        const vegToggle = document.getElementById("vegTabToggle");
        const nonvegToggle = document.getElementById("nonvegTabToggle");

        if (vegToggle && nonvegToggle) {
            vegToggle.addEventListener("click", () => {
                vegToggle.classList.add("active");
                nonvegToggle.classList.remove("active");
                document.getElementById("vegDietContainer").classList.add("active");
                document.getElementById("nonvegDietContainer").classList.remove("active");
                this.activeDietType = "veg";
            });

            nonvegToggle.addEventListener("click", () => {
                nonvegToggle.classList.add("active");
                vegToggle.classList.remove("active");
                document.getElementById("nonvegDietContainer").classList.add("active");
                document.getElementById("vegDietContainer").classList.remove("active");
                this.activeDietType = "nonveg";
            });
        }

        // Close Video Modal Action
        const closeVideoBtn = document.getElementById("closeVideoModal");
        if (closeVideoBtn) {
            closeVideoBtn.addEventListener("click", () => {
                const modal = document.getElementById("videoModal");
                const player = document.getElementById("videoPlayer");
                if (modal) modal.classList.remove("active");
                if (player) player.src = "";
            });
        }

        // Close Video Modal on backdrop click
        const videoModal = document.getElementById("videoModal");
        if (videoModal) {
            videoModal.addEventListener("click", (e) => {
                if (e.target === videoModal) {
                    videoModal.classList.remove("active");
                    const player = document.getElementById("videoPlayer");
                    if (player) player.src = "";
                }
            });
        }

        // AI Food Scanner: Open modal
        const aiScannerBtn = document.getElementById("aiScannerBtn");
        if (aiScannerBtn) {
            aiScannerBtn.addEventListener("click", () => this.openAiScanner());
        }

        // AI Scanner: Close modal
        const closeAiScanner = document.getElementById("closeAiScanner");
        if (closeAiScanner) {
            closeAiScanner.addEventListener("click", () => this.closeAiScanner());
        }

        // AI Scanner: Close on backdrop click
        const aiScannerModal = document.getElementById("aiScannerModal");
        if (aiScannerModal) {
            aiScannerModal.addEventListener("click", (e) => {
                if (e.target === aiScannerModal) this.closeAiScanner();
            });
        }

        // AI Scanner: Tab toggle
        document.querySelectorAll(".scanner-tab").forEach(tab => {
            tab.addEventListener("click", () => {
                document.querySelectorAll(".scanner-tab").forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                document.querySelectorAll(".scanner-pane").forEach(p => p.classList.remove("active"));
                const pane = document.getElementById("scanner" + tab.dataset.scannerTab.charAt(0).toUpperCase() + tab.dataset.scannerTab.slice(1) + "Pane");
                if (pane) pane.classList.add("active");
            });
        });

        // AI Scanner: Capture button
        const captureBtn = document.getElementById("captureBtn");
        if (captureBtn) {
            captureBtn.addEventListener("click", () => this.captureAndAnalyze());
        }

        // AI Scanner: Upload photo button
        const selectPhotoBtn = document.getElementById("selectPhotoBtn");
        const foodFileInput = document.getElementById("foodFileInput");
        if (selectPhotoBtn && foodFileInput) {
            selectPhotoBtn.addEventListener("click", () => foodFileInput.click());
            foodFileInput.addEventListener("change", (e) => {
                if (e.target.files && e.target.files[0]) {
                    this.handleFileUpload(e.target.files[0]);
                }
            });
        }

        // AI Scanner: Upload zone click
        const uploadZone = document.getElementById("uploadZone");
        if (uploadZone && foodFileInput) {
            uploadZone.addEventListener("click", () => foodFileInput.click());
        }

        // AI Scanner: Add detected meal to log
        const addAiMealBtn = document.getElementById("addAiMealBtn");
        if (addAiMealBtn) {
            addAiMealBtn.addEventListener("click", () => this.addAiDetectedMeal());
        }

        // Body Scan: recalc on input change
        ["bodyHeight", "bodyWeight", "bodyAge", "bodyActivity"].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener("input", () => this.recalcBodyMetrics());
                el.addEventListener("change", () => this.recalcBodyMetrics());
            }
        });

        // Body Scan: log daily burn
        const addBodyBurnBtn = document.getElementById("addBodyBurnBtn");
        if (addBodyBurnBtn) {
            addBodyBurnBtn.addEventListener("click", () => this.addBodyBurnToLog());
        }

        // Thali multi-item: add all to log
        const addThaliBtn = document.getElementById("addThaliBtn");
        if (addThaliBtn) {
            addThaliBtn.addEventListener("click", () => this.addThaliToLog());
        }

        // Quick-Add FAB: toggle popup
        const fab = document.getElementById("quickAddFab");
        const popup = document.getElementById("quickAddPopup");
        const closeQa = document.getElementById("closeQuickAdd");
        if (fab && popup) {
            fab.addEventListener("click", () => popup.classList.toggle("open"));
            if (closeQa) closeQa.addEventListener("click", () => popup.classList.remove("open"));
        }

        // Quick-Add presets
        document.querySelectorAll(".qa-preset").forEach(btn => {
            btn.addEventListener("click", () => {
                const cal = btn.getAttribute("data-cal");
                const prot = btn.getAttribute("data-prot");
                const calInput = document.getElementById("quickAddCal");
                const protInput = document.getElementById("quickAddProt");
                if (calInput) calInput.value = cal;
                if (protInput) protInput.value = prot;
            });
        });

        // Quick-Add confirm
        const qaConfirm = document.getElementById("quickAddConfirmBtn");
        if (qaConfirm) {
            qaConfirm.addEventListener("click", () => this.quickAddMeal());
        }

        // Health AI Chatbot
        this.initChatbot();

        // Dashboard improvements
        this.initDashboard();

        // Progress Hub features
        this.initProgressHub();

        // User Profile + Data Export/Import
        this.initUserSystem();
    }

    // Switch Visible Tab Instantly and Scroll to Top
    switchTab(tabId) {
        const nextActive = document.getElementById(tabId);
        if (!nextActive) return;

        // Toggle active tabs instantly to prevent rendering lag
        document.querySelectorAll(".tab-content").forEach(tab => {
            tab.classList.remove("active");
        });
        nextActive.classList.add("active");

        // Refresh data when switching to progress hub
        if (tabId === "progress") {
            this.renderWorkoutLogs();
            this.renderMeasurements();
            this.renderBadges();
            this.renderProgressPhotos();
        }

        // Smooth scroll to top of viewport
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Launch Video Modal Screen
    openVideoModal(videoId, title) {
        const modal = document.getElementById("videoModal");
        const player = document.getElementById("videoPlayer");
        const modalTitle = document.getElementById("videoModalTitle");
        const youtubeFallback = document.getElementById("openOnYoutube");

        if (modal && player && modalTitle) {
            modalTitle.innerHTML = `<i class="fa-solid fa-circle-play text-volt"></i> ${title}`;
            player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            
            if (youtubeFallback) {
                youtubeFallback.href = `https://www.youtube.com/watch?v=${videoId}`;
            }
            
            modal.classList.add("active");
        }
    }

    // Render all elements of the screen
    renderAll() {
        this.renderTrackerRings();
        this.renderLoggedMeals();
        this.renderGymWorkouts();
        this.renderHomeWorkouts();
        this.renderDiets();
    }

    /* ====================================================
       DIET LOGGING & SVG GRAPHICS PROGRESS METERS
       ==================================================== */
    
    renderTrackerRings() {
        // Calculate dynamic logged values
        let totalCal = 0;
        let totalProt = 0;
        this.loggedMeals.forEach(meal => {
            totalCal += meal.calories;
            totalProt += meal.protein;
        });

        // Set Text values
        const heroCalText = document.getElementById("heroCalVal");
        const heroProtText = document.getElementById("heroProtVal");
        const summaryCalTarget = document.getElementById("summaryCalTarget");
        const summaryProtTarget = document.getElementById("summaryProtTarget");

        if (heroCalText) heroCalText.textContent = `${totalCal} / ${this.targetCalories} kcal`;
        if (heroProtText) heroProtText.textContent = `${totalProt} / ${this.targetProtein} g`;
        if (summaryCalTarget) summaryCalTarget.textContent = this.targetCalories;
        if (summaryProtTarget) summaryProtTarget.textContent = this.targetProtein;

        // Calculate Percentages
        const calPct = Math.round((totalCal / this.targetCalories) * 100) || 0;
        const protPct = Math.round((totalProt / this.targetProtein) * 100) || 0;

        const calPctText = document.getElementById("calPct");
        const protPctText = document.getElementById("protPct");
        if (calPctText) calPctText.textContent = `${calPct}%`;
        if (protPctText) protPctText.textContent = `${protPct}%`;

        // SVG circle stroke animations
        // Radius r = 65, circumference = 2 * PI * r = 408.407
        const circ = 408.4;
        const calRing = document.getElementById("calRing");
        const protRing = document.getElementById("protRing");

        if (calRing) {
            const calOffset = circ - (Math.min(calPct, 100) / 100) * circ;
            calRing.style.strokeDashoffset = calOffset;
        }

        if (protRing) {
            const protOffset = circ - (Math.min(protPct, 100) / 100) * circ;
            protRing.style.strokeDashoffset = protOffset;
        }
    }

    handleFoodLogSubmit() {
        const nameInput = document.getElementById("foodName");
        const calInput = document.getElementById("foodCalories");
        const protInput = document.getElementById("foodProtein");

        if (!nameInput || !calInput || !protInput) return;

        const meal = {
            id: "meal_" + Date.now(),
            name: nameInput.value,
            calories: parseInt(calInput.value),
            protein: parseInt(protInput.value),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        this.loggedMeals.push(meal);
        this.saveState("repnoxx_logged_meals", this.loggedMeals);
        this.renderTrackerRings();
        this.renderLoggedMeals();

        // Show Toast
        this.showToast(`Logged "${meal.name}" successfully!`, "success");

        // Reset Inputs
        nameInput.value = "";
        calInput.value = "";
        protInput.value = "";
    }

    renderLoggedMeals() {
        const container = document.getElementById("mealsLogList");
        if (!container) return;

        container.innerHTML = "";

        if (this.loggedMeals.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-cookie-bite"></i>
                    <p>No meals logged today. Fuel the REPNOXX machine!</p>
                </div>
            `;
            return;
        }

        this.loggedMeals.forEach(meal => {
            const item = document.createElement("div");
            item.className = "meal-log-item";
            item.innerHTML = `
                <div class="meal-log-details">
                    <h4>${meal.name}</h4>
                    <p><i class="fa-regular fa-clock"></i> Logged at ${meal.time}</p>
                </div>
                <div class="meal-log-macros">
                    <span class="macro-badge">${meal.calories} kcal</span>
                    <span class="macro-badge badge-protein">${meal.protein}g P</span>
                    <button class="delete-meal-btn" data-id="${meal.id}">
                        <i class="fa-solid fa-square-xmark"></i>
                    </button>
                </div>
            `;
            
            // Delete Meal click trigger
            item.querySelector(".delete-meal-btn").addEventListener("click", () => {
                this.deleteMeal(meal.id, meal.name);
            });

            container.appendChild(item);
        });
    }

    deleteMeal(mealId, mealName) {
        this.loggedMeals = this.loggedMeals.filter(m => m.id !== mealId);
        this.saveState("repnoxx_logged_meals", this.loggedMeals);
        this.renderTrackerRings();
        this.renderLoggedMeals();
        this.showToast(`Removed "${mealName}" from daily logs.`, "info");
    }

    clearLoggedMeals() {
        if (confirm("Are you sure you want to clear today's nutrition logs?")) {
            this.loggedMeals = [];
            this.saveState("repnoxx_logged_meals", this.loggedMeals);
            this.renderTrackerRings();
            this.renderLoggedMeals();
            this.showToast("All daily meal logs cleared.", "info");
        }
    }

    /* ====================================================
       BMR & TDEE CALCULATION AND MACROS CALCULATIONS
       ==================================================== */
    
    calculateTDEE() {
        const gender = document.getElementById("calcGender").value;
        const age = parseInt(document.getElementById("calcAge").value);
        const weight = parseFloat(document.getElementById("calcWeight").value);
        const height = parseFloat(document.getElementById("calcHeight").value);
        const activity = parseFloat(document.getElementById("calcActivity").value);
        const goal = document.getElementById("calcGoal").value;

        if (!age || !weight || !height) {
            this.showToast("Please fill in all details for calculation.", "error");
            return;
        }

        // BMR Harris-Benedict Formula
        let bmr = 0;
        if (gender === "male") {
            bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
        } else {
            bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
        }

        // TDEE calculation
        let tdee = Math.round(bmr * activity);

        // Adjust based on user goal
        let targetCalories = tdee;
        let targetProtein = 150; // fallback default baseline

        if (goal === "cut") {
            targetCalories = tdee - 500; // Deficit
            targetProtein = Math.round(weight * 2.2); // high protein to preserve muscle
        } else if (goal === "bulk") {
            targetCalories = tdee + 350; // Surplus
            targetProtein = Math.round(weight * 1.8);
        } else {
            // maintenance
            targetCalories = tdee;
            targetProtein = Math.round(weight * 2.0);
        }

        // Display results
        const resultsCaloriesEl = document.getElementById("resultCalories");
        const resultsProteinEl = document.getElementById("resultProtein");
        const resultsBox = document.getElementById("calcResultsBox");

        if (resultsCaloriesEl) resultsCaloriesEl.textContent = targetCalories;
        if (resultsProteinEl) resultsProteinEl.textContent = targetProtein;
        if (resultsBox) {
            resultsBox.classList.remove("hidden");
            resultsBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }

        // Temporary session storage for computed variables
        this.tempCalTarget = targetCalories;
        this.tempProtTarget = targetProtein;

        this.showToast("Macros calculated. Review targets below!", "success");
    }

    applyCalculatorTargets() {
        if (!this.tempCalTarget || !this.tempProtTarget) return;

        this.targetCalories = this.tempCalTarget;
        this.targetProtein = this.tempProtTarget;

        localStorage.setItem("repnoxx_target_calories", this.targetCalories.toString());
        localStorage.setItem("repnoxx_target_protein", this.targetProtein.toString());

        this.renderTrackerRings();
        this.showToast(`Daily targets set to ${this.targetCalories} kcal & ${this.targetProtein}g Protein!`, "success");

        // Scroll page smoothly up to dashboard summary
        document.querySelector(".main-header").scrollIntoView({ behavior: "smooth" });
    }

    /* ====================================================
       WORKOUTS LOGGING RENDERING MECHANISMS
       ==================================================== */
    
    renderGymWorkouts() {
        const grid = document.getElementById("gymWorkoutsGrid");
        if (!grid) return;

        grid.innerHTML = "";

        const filtered = this.gymExercises.filter(ex => {
            if (this.currentGymFilter === "all") return true;
            return ex.category === this.currentGymFilter;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <i class="fa-solid fa-dumbbell"></i>
                    <p>No gym exercises found under this filter. Tap admin to create one!</p>
                </div>
            `;
            return;
        }

        filtered.forEach(ex => {
            const card = document.createElement("div");
            card.className = "workout-ex-card animate-slide-up";
            
            // Check completed sets state to see if card needs a completed style
            const isCompleted = this.checkExerciseCompleted(ex.id, ex.sets);
            if (isCompleted) {
                card.classList.add("completed");
            }

            card.innerHTML = `
                <div>
                    <div class="workout-ex-header">
                        <span class="workout-category-tag">${ex.category}</span>
                        ${isCompleted ? '<span class="workout-category-tag" style="color:var(--volt); background:rgba(204,255,0,0.1)">FINISHED</span>' : ''}
                    </div>
                    <h3 class="workout-title">${ex.name}</h3>
                    <div class="workout-target-stats" style="margin-top: 10px;">
                        <span class="target-stat"><i class="fa-solid fa-layer-group"></i> Sets: <strong>${ex.sets}</strong></span>
                        <span class="target-stat"><i class="fa-solid fa-arrows-spin"></i> Reps: <strong>${ex.reps}</strong></span>
                    </div>
                    ${ex.youtubeId ? `<button class="watch-video-btn" data-video="${ex.youtubeId}" data-title="${ex.name}"><i class="fa-solid fa-circle-play"></i> Watch Guide</button>` : ''}
                </div>

                <div class="workout-log-section" style="margin-top: 15px;">
                    <div class="sets-header-row">
                        <span>Set</span>
                        <span style="text-align: center; width: 60px;">Weight kg</span>
                        <span style="text-align: center; width: 60px;">Reps</span>
                        <span style="width: 26px;">Status</span>
                    </div>
                    <div class="sets-scroll-box">
                        ${this.generateSetRowsHTML(ex.id, ex.sets)}
                    </div>
                </div>
            `;

            // Bind click handlers for checkboxes
            card.querySelectorAll(".set-check-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const setIndex = parseInt(btn.getAttribute("data-set"));
                    const weightVal = card.querySelector(`.weight-input[data-set="${setIndex}"]`).value;
                    const repsVal = card.querySelector(`.reps-input[data-set="${setIndex}"]`).value;
                    this.toggleSetDone(ex.id, setIndex, weightVal, repsVal, ex.name, ex.sets);
                });
            });

            // Bind click handler for Watch Guide
            card.querySelectorAll(".watch-video-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const videoId = btn.getAttribute("data-video");
                    const exerciseName = btn.getAttribute("data-title");
                    this.openVideoModal(videoId, exerciseName);
                });
            });

            grid.appendChild(card);
        });
    }

    renderHomeWorkouts() {
        const grid = document.getElementById("homeWorkoutsGrid");
        if (!grid) return;

        grid.innerHTML = "";

        if (this.homeWorkouts.length === 0) {
            grid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <i class="fa-solid fa-house-chimney"></i>
                    <p>No home exercises configured. Open the Admin menu to insert new routines.</p>
                </div>
            `;
            return;
        }

        this.homeWorkouts.forEach(ex => {
            const card = document.createElement("div");
            card.className = "workout-ex-card animate-slide-up";
            
            const isCompleted = this.checkExerciseCompleted(ex.id, ex.sets);
            if (isCompleted) {
                card.classList.add("completed");
            }

            card.innerHTML = `
                <div>
                    <div class="workout-ex-header">
                        <span class="workout-category-tag" style="color:var(--volt); background:rgba(204,255,0,0.06)">Bodyweight</span>
                        ${isCompleted ? '<span class="workout-category-tag" style="color:var(--volt); background:rgba(204,255,0,0.1)">FINISHED</span>' : ''}
                    </div>
                    <h3 class="workout-title">${ex.name}</h3>
                    <div class="workout-target-stats" style="margin-top: 10px;">
                        <span class="target-stat"><i class="fa-solid fa-layer-group"></i> Sets: <strong>${ex.sets}</strong></span>
                        <span class="target-stat"><i class="fa-solid fa-arrows-spin"></i> Reps: <strong>${ex.reps}</strong></span>
                    </div>
                    ${ex.youtubeId ? `<button class="watch-video-btn" data-video="${ex.youtubeId}" data-title="${ex.name}"><i class="fa-solid fa-circle-play"></i> Watch Guide</button>` : ''}
                </div>

                <div class="workout-log-section" style="margin-top: 15px;">
                    <div class="sets-header-row">
                        <span>Set</span>
                        <span style="text-align: center; width: 60px;">Focus</span>
                        <span style="text-align: center; width: 60px;">Reps</span>
                        <span style="width: 26px;">Status</span>
                    </div>
                    <div class="sets-scroll-box">
                        ${this.generateSetRowsHTML(ex.id, ex.sets, true)}
                    </div>
                </div>
            `;

            // Bind click handlers for checkboxes
            card.querySelectorAll(".set-check-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const setIndex = parseInt(btn.getAttribute("data-set"));
                    const weightVal = card.querySelector(`.weight-input[data-set="${setIndex}"]`).value;
                    const repsVal = card.querySelector(`.reps-input[data-set="${setIndex}"]`).value;
                    this.toggleSetDone(ex.id, setIndex, weightVal, repsVal, ex.name, ex.sets);
                });
            });

            // Bind click handler for Watch Guide
            card.querySelectorAll(".watch-video-btn").forEach(btn => {
                btn.addEventListener("click", () => {
                    const videoId = btn.getAttribute("data-video");
                    const exerciseName = btn.getAttribute("data-title");
                    this.openVideoModal(videoId, exerciseName);
                });
            });

            grid.appendChild(card);
        });
    }

    generateSetRowsHTML(exId, setsCount, isHome = false) {
        let html = "";
        const exState = this.setsState[exId] || {};

        for (let i = 0; i < setsCount; i++) {
            const setState = exState[i] || { weight: isHome ? "Body" : "", reps: "", done: false };
            const isDoneClass = setState.done ? "done" : "";

            html += `
                <div class="set-row-item ${isDoneClass}" data-set="${i}">
                    <span class="set-label-tag">SET ${i + 1}</span>
                    <div class="set-inputs">
                        <input type="text" class="weight-input" data-set="${i}" value="${setState.weight}" placeholder="${isHome ? 'Body' : 'kg'}">
                        <input type="text" class="reps-input" data-set="${i}" value="${setState.reps}" placeholder="Reps">
                    </div>
                    <button class="set-check-btn" data-set="${i}">
                        <i class="fa-solid fa-check"></i>
                    </button>
                </div>
            `;
        }
        return html;
    }

    checkExerciseCompleted(exId, setsCount) {
        const exState = this.setsState[exId];
        if (!exState) return false;

        let completedCount = 0;
        for (let i = 0; i < setsCount; i++) {
            if (exState[i] && exState[i].done) {
                completedCount++;
            }
        }
        return completedCount === setsCount;
    }

    toggleSetDone(exId, setIndex, weight, reps, exName, totalSets) {
        if (!this.setsState[exId]) {
            this.setsState[exId] = {};
        }

        const currentState = this.setsState[exId][setIndex] || { done: false };
        const nextDoneState = !currentState.done;

        this.setsState[exId][setIndex] = {
            weight: weight || "0",
            reps: reps || "0",
            done: nextDoneState
        };

        this.saveState("repnoxx_workout_sets_state", this.setsState);

        // Re-render corresponding workout tabs
        if (exId.startsWith("gym_")) {
            this.renderGymWorkouts();
        } else {
            this.renderHomeWorkouts();
        }

        // Show Toast Feedback
        if (nextDoneState) {
            // Check if this completes the entire exercise
            if (this.checkExerciseCompleted(exId, totalSets)) {
                this.showToast(`🔥 REPNOXX System: ${exName} Completed!`, "success");
            } else {
                this.showToast(`${exName} - Set ${setIndex + 1} logged.`, "success");
            }
        }
    }

    /* ====================================================
       DIET meal cards rendering
       ==================================================== */
    
    renderDiets() {
        const vegGrid = document.getElementById("vegMealsGrid");
        const nonvegGrid = document.getElementById("nonvegMealsGrid");

        if (vegGrid) {
            vegGrid.innerHTML = "";
            this.vegDiet.forEach((meal, i) => {
                const card = document.createElement("div");
                card.className = "diet-meal-card animate-slide-up";
                card.style.animationDelay = `${i * 0.08}s`;
                card.innerHTML = `
                    <div>
                        <span class="diet-meal-number">REPNOXX MEAL ${i + 1}</span>
                        <h3 class="diet-meal-title">${meal.name}</h3>
                        <p class="diet-meal-details">${meal.details}</p>
                    </div>
                    <div class="diet-meal-macros">
                        <span class="diet-macro-tag text-cyan"><i class="fa-solid fa-fire-flame-simple"></i> ${meal.calories} kcal</span>
                        <span class="diet-macro-tag text-volt"><i class="fa-solid fa-egg"></i> ${meal.protein}g Protein</span>
                    </div>
                `;
                vegGrid.appendChild(card);
            });
        }

        if (nonvegGrid) {
            nonvegGrid.innerHTML = "";
            this.nonvegDiet.forEach((meal, i) => {
                const card = document.createElement("div");
                card.className = "diet-meal-card animate-slide-up";
                card.style.animationDelay = `${i * 0.08}s`;
                card.innerHTML = `
                    <div>
                        <span class="diet-meal-number" style="color: var(--cyan)">REPNOXX MEAL ${i + 1}</span>
                        <h3 class="diet-meal-title">${meal.name}</h3>
                        <p class="diet-meal-details">${meal.details}</p>
                    </div>
                    <div class="diet-meal-macros">
                        <span class="diet-macro-tag text-cyan"><i class="fa-solid fa-fire-flame-simple"></i> ${meal.calories} kcal</span>
                        <span class="diet-macro-tag text-volt"><i class="fa-solid fa-egg"></i> ${meal.protein}g Protein</span>
                    </div>
                `;
                nonvegGrid.appendChild(card);
            });
        }
    }

    /* ====================================================
       AI FOOD SCANNER (TensorFlow.js + MobileNet)
       ==================================================== */

    openAiScanner() {
        const modal = document.getElementById("aiScannerModal");
        if (!modal) return;
        modal.classList.add("active");

        if (!this.aiModel || !this.cocoModel) {
            this.loadAiModel();
        }

        this.startCamera();

        const resultsBox = document.getElementById("aiResultsBox");
        if (resultsBox) resultsBox.style.display = "none";
        const uploadPreview = document.getElementById("uploadPreview");
        if (uploadPreview) uploadPreview.style.display = "none";
        const uploadZone = document.getElementById("uploadZone");
        if (uploadZone) uploadZone.style.display = "block";
        const thaliEl = document.getElementById("thaliResult");
        if (thaliEl) thaliEl.style.display = "none";

        this.renderQuickSelectGrid();
    }

    closeAiScanner() {
        const modal = document.getElementById("aiScannerModal");
        if (modal) modal.classList.remove("active");
        this.stopCamera();
        const thaliEl = document.getElementById("thaliResult");
        if (thaliEl) thaliEl.style.display = "none";
    }

    async loadAiModel() {
        try {
            this.aiModel = await mobilenet.load();
            this.aiModelLoaded = true;
        } catch (e) {
            console.warn("REPNOXX: AI model load failed.", e);
            this.aiModelLoaded = false;
        }
        try {
            this.cocoModel = await cocoSsd.load();
            this.cocoModelLoaded = true;
        } catch (e) {
            console.warn("REPNOXX: COCO-SSD load failed, multi-item detection disabled.", e);
            this.cocoModelLoaded = false;
        }
    }

    async startCamera() {
        const video = document.getElementById("aiVideo");
        if (!video) return;
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "environment", width: { ideal: 640 }, height: { ideal: 480 } },
                audio: false
            });
            video.srcObject = stream;
            this.cameraStream = stream;
        } catch (e) {
            const uploadTab = document.querySelector('[data-scanner-tab="upload"]');
            if (uploadTab) uploadTab.click();
            this.showToast("Camera unavailable. Try uploading a photo instead.", "error");
        }
    }

    stopCamera() {
        if (this.cameraStream) {
            this.cameraStream.getTracks().forEach(track => track.stop());
            this.cameraStream = null;
        }
    }

    async captureAndAnalyze() {
        const video = document.getElementById("aiVideo");
        const canvas = document.getElementById("aiCanvas");
        if (!video || !canvas) return;

        canvas.width = video.videoWidth || 640;
        canvas.height = video.videoHeight || 480;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const img = new Image();
        img.src = canvas.toDataURL("image/jpeg");
        img.onload = () => this.runClassification(img);
    }

    async handleFileUpload(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.getElementById("uploadedImage");
            const preview = document.getElementById("uploadPreview");
            const uploadZone = document.getElementById("uploadZone");
            if (img && preview && uploadZone) {
                img.src = e.target.result;
                preview.style.display = "block";
                uploadZone.style.display = "none";
                img.onload = () => this.runClassification(img);
            }
        };
        reader.readAsDataURL(file);
    }

    isPersonRelated(className) {
        const lower = className.toLowerCase();
        const personHints = ["person", "people", "man", "woman", "child", "boy", "girl", "human", "body", "athlete", "runner", "sport", "exercise", "fitness", "gym", "workout", "runner", "swimmer", "skater", "diver", "climber", "weightlifter", "gymnast", "dancer", "yoga", "runner", "jogger", "walking", "running", "sitting", "standing", "posing", "portrait", "face", "profile", "selfie", "crowd", "audience", "group"];
        for (const h of personHints) {
            if (lower.includes(h)) return true;
        }
        return false;
    }

    isFoodRelated(className) {
        const lower = className.toLowerCase();
        for (const [key] of Object.entries(FOOD_NUTRITION_MAP)) {
            if (key === "default") continue;
            if (lower.includes(key) || key.includes(lower)) return true;
        }
        const hints = ["food", "dish", "meal", "cuisine", "meat", "fruit", "vegetable", "sauce", "salad", "drink", "berry", "bread", "cake", "soup", "salad", "toast", "roast", "grill", "fry", "bake", "boil", "steam", "raw", "cooked", "sweet", "savory", "edible", "nutritious", "protein", "calorie", "breakfast", "lunch", "dinner", "snack"];
        for (const h of hints) {
            if (lower.includes(h)) return true;
        }
        return false;
    }

    scoreFoodMatch(className) {
        const lower = className.toLowerCase();
        let bestScore = 0;
        let bestKey = null;
        for (const [key] of Object.entries(FOOD_NUTRITION_MAP)) {
            if (key === "default") continue;
            if (lower === key) return 1.0;
            if (lower.includes(key)) {
                const score = key.length / Math.max(lower.length, 1);
                if (score > bestScore) { bestScore = score; bestKey = key; }
            }
            if (key.includes(lower)) {
                const score = lower.length / Math.max(key.length, 1);
                if (score > bestScore) { bestScore = score; bestKey = key; }
            }
        }
        return bestKey ? bestScore : 0;
    }

    async runClassification(imageElement) {
        const resultsBox = document.getElementById("aiResultsBox");
        const loading = document.getElementById("aiLoading");
        const loadingText = document.getElementById("aiLoadingText");
        const content = document.getElementById("aiResultContent");
        const bodyContent = document.getElementById("bodyResultContent");
        const foodName = document.getElementById("detectedFoodName");
        const confidence = document.getElementById("detectedConfidence");
        const calDisplay = document.getElementById("detectedCalories");
        const protDisplay = document.getElementById("detectedProtein");
        const servingDisplay = document.getElementById("detectedServing");
        const calEdit = document.getElementById("aiEditCalories");
        const protEdit = document.getElementById("aiEditProtein");
        const fallback = document.getElementById("quickSelectFallback");
        const thaliEl = document.getElementById("thaliResult");
        if (thaliEl) thaliEl.style.display = "none";

        if (!resultsBox) return;
        resultsBox.style.display = "block";
        if (loading) { loading.style.display = "flex"; if (loadingText) loadingText.textContent = "AI is analyzing..."; }
        if (content) content.style.display = "none";
        if (bodyContent) bodyContent.style.display = "none";
        if (fallback) fallback.style.display = "none";

        try {
            let predictions;
            if (this.aiModel && this.aiModelLoaded) {
                predictions = await this.aiModel.classify(imageElement);
            }

            let bestFood = null;
            let bestPerson = null;
            let bestName = "Unknown";
            let bestConfidence = 0;

            if (predictions && predictions.length > 0) {
                const foodScored = [];
                const personScored = [];
                for (const pred of predictions) {
                    const raw = pred.className || pred.class || "";
                    const clean = raw.split(",")[0].trim();
                    const prob = pred.probability || 0;
                    if (this.isPersonRelated(clean)) {
                        personScored.push({ name: clean, prob });
                    } else if (this.isFoodRelated(clean)) {
                        const matchScore = this.scoreFoodMatch(clean);
                        foodScored.push({ name: clean, prob, matchScore, combined: matchScore * prob });
                    }
                }
                personScored.sort((a, b) => b.prob - a.prob);
                foodScored.sort((a, b) => b.combined - a.combined);

                if (personScored.length > 0 && personScored[0].prob > 0.3) {
                    bestPerson = personScored[0];
                }
                if (foodScored.length > 0 && foodScored[0].combined > 0.05) {
                    bestFood = foodScored[0];
                }
            }

            if (bestPerson && (!bestFood || bestPerson.prob > (bestFood.prob || 0) + 0.2)) {
                if (loading) loading.style.display = "none";
                if (content) content.style.display = "none";
                if (bodyContent) bodyContent.style.display = "block";
                if (fallback) fallback.style.display = "none";

                const bodyLabel = document.getElementById("bodyDetectedLabel");
                const bodyConf = document.getElementById("bodyConfidence");
                const bodyBmr = document.getElementById("bodyBmrValue");
                const bodyBurn = document.getElementById("bodyBurnValue");
                const bodyEst = document.getElementById("bodyEstimateLabel");
                const hInput = document.getElementById("bodyHeight");
                const wInput = document.getElementById("bodyWeight");
                const aInput = document.getElementById("bodyAge");

                if (bodyLabel) bodyLabel.textContent = bestPerson.name;
                if (bodyConf) bodyConf.textContent = `Confidence: ${Math.round(bestPerson.prob * 100)}%`;

                const defaults = this.estimateBodyMetrics();
                if (hInput) hInput.value = defaults.height;
                if (wInput) hInput.dataset.default = defaults.height;
                if (wInput) wInput.value = defaults.weight;
                if (wInput) wInput.dataset.default = defaults.weight;
                if (aInput) aInput.value = defaults.age;
                if (aInput) aInput.dataset.default = defaults.age;

                this.recalcBodyMetrics();
                if (bodyEst) bodyEst.textContent = "Estimated from frame. Adjust above.";

                this.bodyScanActive = true;
            } else if (bestFood) {
                const nutrition = this.mapFoodToNutrition(bestFood.name);
                const pct = Math.min(Math.round(bestFood.prob * 100), 99);
                if (foodName) foodName.textContent = bestFood.name;
                if (confidence) confidence.textContent = `Confidence: ${pct}%`;
                if (calDisplay) calDisplay.textContent = nutrition.calories;
                if (protDisplay) protDisplay.textContent = nutrition.protein;
                if (servingDisplay) servingDisplay.textContent = nutrition.serving;
                if (calEdit) calEdit.value = nutrition.calories;
                if (protEdit) protEdit.value = nutrition.protein;
                this.lastAiDetection = { name: bestFood.name, calories: nutrition.calories, protein: nutrition.protein };
                if (loading) loading.style.display = "none";
                if (content) content.style.display = "block";
                if (bodyContent) bodyContent.style.display = "none";
                if (fallback) fallback.style.display = "none";
                this.bodyScanActive = false;
                const addLabel = document.getElementById("addBtnLabel");
                if (addLabel) addLabel.textContent = `${nutrition.calories} kcal · ${nutrition.protein}g · ${bestFood.name}`;
            } else if (predictions && predictions.length > 0) {
                const top = predictions[0];
                const raw = top.className || top.class || "";
                const clean = raw.split(",")[0].trim();
                const pct = Math.min(Math.round((top.probability || 0) * 100), 99);
                if (foodName) foodName.textContent = clean;
                if (confidence) confidence.textContent = `Identified: ${pct}% · Not a food item`;
                if (calDisplay) calDisplay.textContent = "—";
                if (protDisplay) protDisplay.textContent = "—";
                if (servingDisplay) servingDisplay.textContent = "No calorie/protein data";
                if (calEdit) calEdit.value = 0;
                if (protEdit) protEdit.value = 0;
                this.lastAiDetection = { name: clean, calories: 0, protein: 0 };
                if (loading) loading.style.display = "none";
                if (content) content.style.display = "block";
                if (bodyContent) bodyContent.style.display = "none";
                if (fallback) {
                    fallback.style.display = "block";
                    this.renderQuickSelectGrid();
                }
                this.bodyScanActive = false;
                const addLabel = document.getElementById("addBtnLabel");
                if (addLabel) addLabel.textContent = `0 kcal · 0g · ${clean}`;
            } else {
                if (loading) loading.style.display = "none";
                if (content) content.style.display = "none";
                if (bodyContent) bodyContent.style.display = "none";
                if (fallback) {
                    fallback.style.display = "block";
                    this.renderQuickSelectGrid();
                }
                if (foodName) foodName.textContent = "Could not identify subject";
                if (confidence) confidence.textContent = "Try a clearer photo or tap below";
                this.bodyScanActive = false;
            }
            this.runCocoDetection(imageElement);
        } catch (e) {
            console.error("AI classification error:", e);
            if (loading) loading.style.display = "none";
            if (content) content.style.display = "none";
            if (bodyContent) bodyContent.style.display = "none";
            if (fallback) {
                fallback.style.display = "block";
                this.renderQuickSelectGrid();
            }
            if (foodName) foodName.textContent = "AI analysis unavailable";
            if (confidence) confidence.textContent = "Select your food from the grid below";
            this.bodyScanActive = false;
        }
    }

    estimateBodyMetrics() {
        return { height: 175, weight: 72, age: 25 };
    }

    recalcBodyMetrics() {
        const h = parseFloat(document.getElementById("bodyHeight")?.value) || 175;
        const w = parseFloat(document.getElementById("bodyWeight")?.value) || 72;
        const a = parseFloat(document.getElementById("bodyAge")?.value) || 25;
        const act = parseFloat(document.getElementById("bodyActivity")?.value) || 1.725;

        const bmr = Math.round(88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a));
        const daily = Math.round(bmr * act);

        const bmrEl = document.getElementById("bodyBmrValue");
        const burnEl = document.getElementById("bodyBurnValue");
        if (bmrEl) bmrEl.textContent = bmr;
        if (burnEl) burnEl.textContent = daily;
    }

    mapFoodToNutrition(className) {
        const lower = className.toLowerCase();
        if (FOOD_NUTRITION_MAP[lower]) return FOOD_NUTRITION_MAP[lower];
        let bestKey = null;
        let bestScore = 0;
        for (const [key, data] of Object.entries(FOOD_NUTRITION_MAP)) {
            if (key === "default") continue;
            if (lower.includes(key) || key.includes(lower)) {
                const score = key.length / Math.max(lower.length, 1) + (key.includes(lower) ? lower.length / Math.max(key.length, 1) : 0);
                if (score > bestScore) { bestScore = score; bestKey = key; }
            }
        }
        if (bestKey) return FOOD_NUTRITION_MAP[bestKey];
        return FOOD_NUTRITION_MAP.default;
    }

    renderQuickSelectGrid() {
        const grid = document.getElementById("qsGrid");
        if (!grid) return;

        let html = "";
        for (const item of FOOD_CATEGORY_MAP) {
            if (item.isLabel) {
                html += `<div class="category-label">${item.label}</div>`;
            } else {
                const food = QUICK_SELECT_FOODS.find(f => f.label === item);
                if (food) {
                    html += `<button class="qs-btn" data-food="${food.label}">
                        <i class="fa-solid fa-${food.icon} qs-icon"></i>
                        ${food.label}
                        <span class="qs-macro">${food.kcal}kcal · ${food.prot}gP</span>
                    </button>`;
                }
            }
        }
        grid.innerHTML = html;

        grid.querySelectorAll(".qs-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const label = btn.getAttribute("data-food");
                this.selectQuickFood(label);
            });
        });
    }

    selectQuickFood(label) {
        const food = QUICK_SELECT_FOODS.find(f => f.label === label);
        if (!food) return;

        const resultsBox = document.getElementById("aiResultsBox");
        const content = document.getElementById("aiResultContent");
        const fallback = document.getElementById("quickSelectFallback");
        const foodName = document.getElementById("detectedFoodName");
        const confidence = document.getElementById("detectedConfidence");
        const calDisplay = document.getElementById("detectedCalories");
        const protDisplay = document.getElementById("detectedProtein");
        const servingDisplay = document.getElementById("detectedServing");
        const calEdit = document.getElementById("aiEditCalories");
        const protEdit = document.getElementById("aiEditProtein");

        if (resultsBox) resultsBox.style.display = "block";
        if (content) content.style.display = "block";
        if (fallback) fallback.style.display = "none";
        if (foodName) foodName.textContent = `${food.label} (manual)`;
        if (confidence) confidence.textContent = "You selected this food";
        if (calDisplay) calDisplay.textContent = food.kcal;
        if (protDisplay) protDisplay.textContent = food.prot;
        if (servingDisplay) servingDisplay.textContent = "selected serving";
        if (calEdit) calEdit.value = food.kcal;
        if (protEdit) protEdit.value = food.prot;

        this.lastAiDetection = { name: food.label, calories: food.kcal, protein: food.prot };
        const addLabel = document.getElementById("addBtnLabel");
        if (addLabel) addLabel.textContent = `${food.kcal} kcal · ${food.prot}g · ${food.label}`;
    }

    addAiDetectedMeal() {
        if (!this.lastAiDetection) {
            this.showToast("No food detected yet. Capture a photo or select from the grid.", "error");
            return;
        }

        const calEdit = document.getElementById("aiEditCalories");
        const protEdit = document.getElementById("aiEditProtein");

        const calories = parseInt(calEdit?.value) || this.lastAiDetection.calories;
        const protein = parseInt(protEdit?.value) || this.lastAiDetection.protein;

        const meal = {
            id: "meal_ai_" + Date.now(),
            name: this.lastAiDetection.name || "AI Detected Food",
            calories: calories,
            protein: protein,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };

        this.loggedMeals.push(meal);
        this.saveState("repnoxx_logged_meals", this.loggedMeals);
        this.renderTrackerRings();
        this.renderLoggedMeals();
        this.closeAiScanner();

        this.showToast(`${meal.name}: ${calories} kcal, ${protein}g protein logged!`, "success");
    }

    addBodyBurnToLog() {
        const h = parseFloat(document.getElementById("bodyHeight")?.value) || 175;
        const w = parseFloat(document.getElementById("bodyWeight")?.value) || 72;
        const a = parseFloat(document.getElementById("bodyAge")?.value) || 25;
        const act = parseFloat(document.getElementById("bodyActivity")?.value) || 1.725;
        const bmr = Math.round(88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a));
        const daily = Math.round(bmr * act);

        const bodyLabel = document.getElementById("bodyDetectedLabel");
        const name = (bodyLabel?.textContent || "Person") + " Daily Burn";

        const meal = {
            id: "burn_" + Date.now(),
            name: name,
            calories: daily,
            protein: 0,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };

        this.loggedMeals.push(meal);
        this.saveState("repnoxx_logged_meals", this.loggedMeals);
        this.renderTrackerRings();
        this.renderLoggedMeals();
        this.closeAiScanner();

        this.showToast(`${daily} kcal logged as daily burn!`, "success");
    }

    quickAddMeal() {
        const nameInput = document.getElementById("quickAddName");
        const calInput = document.getElementById("quickAddCal");
        const protInput = document.getElementById("quickAddProt");
        const popup = document.getElementById("quickAddPopup");

        const name = nameInput?.value?.trim() || "Quick Add Meal";
        const calories = parseInt(calInput?.value) || 300;
        const protein = parseInt(protInput?.value) || 15;

        const meal = {
            id: "quick_" + Date.now(),
            name: name,
            calories: calories,
            protein: protein,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };

        this.loggedMeals.push(meal);
        this.saveState("repnoxx_logged_meals", this.loggedMeals);
        this.renderTrackerRings();
        this.renderLoggedMeals();

        if (popup) popup.classList.remove("open");
        if (nameInput) nameInput.value = "";
        if (calInput) calInput.value = "";
        if (protInput) protInput.value = "";

        this.showToast(`${meal.name}: ${calories} kcal logged!`, "success");
    }

    /* -------- Thali / Multi-Item Detection (COCO-SSD) -------- */

    get cocoFoodMap() {
        return {
            "apple": { calories: 52, protein: 0.3, name: "Apple" },
            "banana": { calories: 105, protein: 1.3, name: "Banana" },
            "orange": { calories: 62, protein: 1.2, name: "Orange" },
            "broccoli": { calories: 34, protein: 2.8, name: "Broccoli" },
            "carrot": { calories: 25, protein: 0.6, name: "Carrot" },
            "hot dog": { calories: 290, protein: 11, name: "Hot Dog" },
            "pizza": { calories: 285, protein: 12, name: "Pizza" },
            "donut": { calories: 195, protein: 2.5, name: "Donut" },
            "cake": { calories: 257, protein: 3, name: "Cake" },
            "sandwich": { calories: 250, protein: 12, name: "Sandwich" },
            "bowl": { calories: 400, protein: 20, name: "Bowl Meal" },
            "cup": { calories: 150, protein: 5, name: "Cup" }
        };
    }

    async runCocoDetection(imageElement) {
        try {
            if (!this.cocoModel || !this.cocoModelLoaded) {
                try {
                    this.cocoModel = await cocoSsd.load();
                    this.cocoModelLoaded = true;
                } catch (e) {
                    console.warn("COCO-SSD load failed, skipping thali detection", e);
                    this.cocoModelLoaded = false;
                    return;
                }
            }
            const detections = await this.cocoModel.detect(imageElement);
            const cmap = this.cocoFoodMap;
            const foodItems = [];
            for (const d of detections) {
                const cls = d.class.toLowerCase();
                if (cmap[cls]) {
                    foodItems.push({
                        class: cls,
                        label: cmap[cls].name,
                        calories: cmap[cls].calories,
                        protein: cmap[cls].protein,
                        score: Math.round(d.score * 100)
                    });
                }
            }
            if (foodItems.length <= 1) return;
            this.showThaliResults(foodItems);
        } catch (e) {
            console.warn("COCO-SSD detection error:", e);
        }
    }

    showThaliResults(items) {
        const thaliEl = document.getElementById("thaliResult");
        const container = document.getElementById("thaliItems");
        const totalCal = document.getElementById("thaliTotalCal");
        const totalProt = document.getElementById("thaliTotalProt");
        if (!thaliEl || !container) return;

        container.innerHTML = "";
        let sumCal = 0, sumProt = 0;
        for (const item of items) {
            sumCal += item.calories;
            sumProt += item.protein;
            const row = document.createElement("div");
            row.className = "thali-item";
            row.innerHTML = `<span class="thali-item-name">${item.label}</span><span class="thali-item-nutri"><strong class="thali-cal">${item.calories}</strong> kcal · <strong class="thali-prot">${item.protein}</strong>g  <span style="opacity:0.4;font-size:10px">${item.score}%</span></span>`;
            container.appendChild(row);
        }
        if (totalCal) totalCal.textContent = sumCal;
        if (totalProt) totalProt.textContent = sumProt;
        this._thaliItems = items;
        thaliEl.style.display = "block";
    }

    addThaliToLog() {
        const items = this._thaliItems;
        if (!items || items.length === 0) {
            this.showToast("No thali items to log.", "error");
            return;
        }
        const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        for (const item of items) {
            this.loggedMeals.push({
                id: "thali_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
                name: item.label,
                calories: item.calories,
                protein: item.protein,
                time: time
            });
        }
        this.saveState("repnoxx_logged_meals", this.loggedMeals);
        this.renderTrackerRings();
        this.renderLoggedMeals();
        this.closeAiScanner();
        this.showToast(`Logged ${items.length} items: ${items.reduce((s, i) => s + i.calories, 0)} kcal, ${items.reduce((s, i) => s + i.protein, 0)}g protein`, "success");
    }

    /* ====================================================
       HEALTH AI CHATBOT — Bilingual (EN + HI / Hinglish)
       ==================================================== */

    get healthQa() {
        return [
            // Protein
            { kw: ["protein", "protain", "protean", "protien", "protein intake", "protein per day", "protein need", "protein kaise", "protein kya", "how much protein", "protein len", "protein khana"], ans: "General recommendation: 1.6–2.2g per kg bodyweight for muscle growth. For a 75kg person that's 120–165g daily. Spread across 4–5 meals.\n\nहिंदी: मांसपेशियों के लिए 1.6–2.2g प्रति किग्रा वजन लें। 75kg वाले को रोज़ 120–165g protein चाहिए। 4–5 meals में बांटें।" },
            // Calories
            { kw: ["calorie", "calories", "kcal", "cal deficit", "cal surplus", "calorie deficit", "calorie surplus", "calories per day", "calorie count", "calorie kya", "calorie kitna"], ans: "Maintenance = bodyweight(kg) × 33. Fat loss: eat 300–500 below maintenance. Muscle gain: add 300–500 above. A 75kg person maintains ~2475 kcal/day.\n\nहिंदी: वजन बनाए रखने के लिए 75kg × 33 = ~2475 kcal/दिन। वजन कम करने के लिए 300–500 कम खाएं। बढ़ाने के लिए 300–500 ज़्यादा।" },
            // Weight Loss
            { kw: ["weight loss", "lose weight", "fat loss", "lose fat", "weight lose", "burn fat", "weight loss tips", "fat loss tips", "body fat loss", "motapa", "mota", "patla", "weight kam", "weight loss kaise", "fat loss kaise", "moti", "patle", "slim", "wajan kam", "vajan kam", "fat reduce"], ans: "Calorie deficit is key. Eat 300–500 below maintenance, hit 1.6g+ protein per kg, lift weights 3–4×/week, walk 8–10k steps daily, sleep 7–8h. Consistency matters most.\n\nहिंदी: कैलोरी कम खाएं, protein लें, वेट ट्रेनिंग करें, 8–10k क़दम चलें, 7–8 घंटे सोएं। लगातार करें — रिज़ल्ट आएगा।" },
            // Weight Gain / Bulking
            { kw: ["weight gain", "gain weight", "bulk", "bulking", "mass gain", "gain mass", "bulk kaise", "mass gain kaise", "mota kaise", "weight gain tips", "weight badhao", "wajan badhao", "vajan badhao", "body weight gain"], ans: "Eat 300–500 above maintenance. Focus on calorie-dense foods: peanut butter, whole eggs, rice, oats, nuts, bananas, full cream milk. Lift heavy with progressive overload. 4–6 meals/day.\n\nहिंदी: 300–500 कैलोरी ज़्यादा खाएं। peanut butter, अंडे, चावल, oats, केला, दूध खूब खाएं। हैवी वेट ट्रेनिंग करें। 4–6 meals रोज़।" },
            // Carbs
            { kw: ["carbs", "carbohydrates", "carb", "carbohydrate", "carbs per day", "how many carbs", "carb kya", "carb kitna", "carbohidrates", "complex carbs", "simple carbs"], ans: "Carbs fuel your workouts. Active lifters: 3–5g per kg bodyweight. Rest days: 2–3g per kg. Prioritize complex carbs: oats, sweet potato, brown rice, quinoa, whole wheat.\n\nहिंदी: कार्ब्स से एनर्जी मिलती है। एक्टिव लोग: 3–5g प्रति किग्रा। आराम के दिन: 2–3g प्रति किग्रा। खाएं: oats, शकरकंद, ब्राउन राइस, क्विनोआ।" },
            // Fats
            { kw: ["fat", "fats", "healthy fat", "dietary fat", "fat per day", "good fat", "bad fat", "fat kya", "fat khana", "saturated fat", "unsaturated"], ans: "Fats are essential for hormones. Eat 0.8–1g per kg bodyweight. Focus on unsaturated: avocado, olive oil, nuts, seeds, fatty fish. Limit trans fats & processed oils.\n\nहिंदी: फैट हार्मोन के लिए ज़रूरी है। रोज़ 0.8–1g प्रति किग्रा लें। खाएं: nuts, बीज, जैतून का तेल, मछली। तला-भुना कम खाएं।" },
            // Supplements
            { kw: ["supplement", "supplements", "suppliments", "suplements", "whey", "creatine", "bcaa", "pre workout", "pre-workout", "preworkout", "multivitamin", "vitamin", "supplement kya", "supplement lena", "protein powder", "mass gainer"], ans: "The essentials:\n1) Whey protein — convenient protein source\n2) Creatine monohydrate — 5g/day, proven strength gains\n3) Vitamin D + Omega-3 if you're deficient\nEverything else is optional. Food comes first.\n\nहिंदी: सबसे ज़रूरी: Whey protein, Creatine 5g/दिन, Vitamin D। बाकी सब ऑप्शनल है। पहले खाना खाएं।" },
            // Creatine
            { kw: ["creatine", "creatin", "kreatin", "creatine monohydrate", "creatine kya", "creatine kaise", "creatine side effects", "creatine benefits", "creatine lena"], ans: "Creatine monohydrate: 5g daily, no need to cycle. Increases strength, power, muscle volume, and even brain function. Takes 2–4 weeks to saturate. Extremely safe & well-researched.\n\nहिंदी: रोज़ 5g creatine लें। ताकत, मसल वॉल्यूम और दिमाग़ के लिए फ़ायदेमंद। 2–4 हफ़्ते में असर दिखता है। पूरी तरह सुरक्षित।" },
            // Whey protein
            { kw: ["whey", "whey protein", "whey isolate", "whey kya", "protein shake", "whey kaise", "whey lena"], ans: "Whey protein: fast-absorbing, ideal post-workout. 25–30g per scoop. Whey isolate has less lactose & fat. Casein is slow — take before bed. Natural sources also work great.\n\nहिंदी: Whey जल्दी पचता है — workout के बाद लें। 1 scoop में ~25–30g protein। Isolate में lactose कम होता है। Casein सोने से पहले लें।" },
            // Pre-workout
            { kw: ["pre workout", "pre-workout", "preworkout", "pre workout kya", "energy drink", "caffeine pre", "beta alanine"], ans: "Pre-workout: caffeine (150–300mg), beta-alanine (tingling = normal), citrulline malate for pumps. Take 20–30 min before training. Don't use daily to avoid building tolerance.\n\nहिंदी: Workout से 20–30 मिनट पहले लें। कैफ़ीन 150–300mg, beta-alanine से झुनझुनाहट होना normal है। रोज़ न लें — tolerance बढ़ जाएगी।" },
            // Water
            { kw: ["water", "hydration", "drink water", "how much water", "pani", "paani", "water intake", "dehydration", "hydrate"], ans: "Minimum: 35ml per kg bodyweight. For a 75kg person = ~2.6L. Add 500ml for every hour of intense exercise. Sip throughout the day — thirst is a late signal.\n\nहिंदी: रोज़ 35ml प्रति किग्रा पानी पिएं। 75kg के लिए ~2.6 लीटर। वर्कआउट में 500ml और। थोड़ा-थोड़ा करके पीते रहें।" },
            // Sleep
            { kw: ["sleep", "recovery", "rest", "sleep hours", "better sleep", "neend", "nind", "sleep tips", "insomnia", "sone", "aaram", "sleep cycle"], ans: "Sleep is when muscle repair happens. Aim for 7–9 hours. Tips: no screens 1h before bed, dark & cool room, consistent schedule, no caffeine after 2pm.\n\nहिंदी: मांसपेशियां नींद में रिपेयर होती हैं। 7–9 घंटे सोएं। सोने से 1 घंटा पहले फ़ोन बंद करें। रोज़ एक ही समय पर सोएं।" },
            // Workout
            { kw: ["workout", "work out", "training", "exercise", "gym", "lift", "workout split", "workout routine", "routine", "gym kya", "workout kya", "workout h", "gym jana", "kaam karna", "strength training", "workout tips"], ans: "A solid beginner split: 3× full-body/week or 4× upper-lower. Progressive overload (add weight or reps each week). Train each muscle group 2×/week. Rest 48h between sessions.\n\nहिंदी: शुरुआत में: हफ़्ते में 3 बार full-body या 4 बार upper-lower। हर हफ़्ते वज़न या reps बढ़ाएं। हर muscle को हफ़्ते में 2 बार ट्रेन करें।" },
            // Pushups / Bodyweight
            { kw: ["pushup", "push up", "push-ups", "pushups", "bodyweight", "home workout", "no equipment", "home exercise", "home training", "bina gym", "body weight", "calisthenics"], ans: "Bodyweight training works: push-ups (3×15), squats (3×20), lunges (3×12/leg), planks (3×60s), pull-ups if available. Progress by adding reps, reducing rest, or adding weight.\n\nहिंदी: घर पर: push-ups 3×15, squats 3×20, lunges 3×12, plank 3×60 सेकंड। हर हफ़्ते reps बढ़ाएं या आराम कम करें।" },
            // Cardio
            { kw: ["cardio", "running", "walking", "treadmill", "cycling", "swimming", "cycling", "hiking", "jogging", "cardio kya", "cardio loss", "cardio weight loss"], ans: "Cardio for heart health: 150 min moderate or 75 min vigorous per week. LISS (walking) won't kill gains. HIIT 2–3×/week for fat loss while preserving muscle.\n\nहिंदी: दिल के लिए: हफ़्ते में 150 मिनट मीडियम या 75 मिनट तेज़ cardio। HIIT हफ़्ते में 2–3 बार फैट loss के लिए बढ़िया।" },
            // BMI
            { kw: ["bmi", "body mass index", "bmi calculator", "bmi kya", "bmi kitna"], ans: "BMI = weight(kg) / height(m)². It's a rough guide but ignores muscle mass. A muscular person can show 'overweight' BMI while being lean. Use body fat % instead.\n\nहिंदी: BMI मोटा अनुमान है — इसमें muscle mass शामिल नहीं है। बॉडी फ़ैट % ज़्यादा सही माप है।" },
            // Body Fat
            { kw: ["body fat", "bodyfat", "body fat percentage", "fat percentage", "body fat kya", "body fat check", "fat check"], ans: "Healthy ranges: 10–15% for men (athletes 6–13%), 18–24% for women (athletes 14–20%). Measured via calipers, DEXA scan, or bioimpedance. Visible abs usually at ≤12% (men).\n\nहिंदी: पुरुष: 10–15% (एथलीट 6–13%)। महिला: 18–24% (एथलीट 14–20%)। Abs ≤12% पर दिखते हैं। DEXA scan सबसे सटीक।" },
            // Abs
            { kw: ["abs", "six pack", "six-pack", "sixpack", "core", "ab workout", "stomach fat", "belly fat", "pet", "pet fat", "abs workout", "abs kaise", "abs tips"], ans: "Abs are made in the kitchen. You can't spot-reduce fat. Train abs 2–3×/week with weighted exercises (cable crunches, hanging leg raises). Get to ≤12% body fat for visible abs.\n\nहिंदी: Abs किचन में बनते हैं! पेट की चर्बी सिर्फ़ डाइट से कम होती है। Abs को हफ़्ते में 2–3 बार ट्रेन करें। ≤12% body fat पर abs दिखेंगे।" },
            // Chest
            { kw: ["chest", "bench press", "bench", "pectoral", "pec", "pecs", "chest workout", "chest exercise", "chest kya", "chest kaise", "chest badhao"], ans: "Best chest: barbell bench press, incline dumbbell press, cable flyes, dips. Focus on mind-muscle connection, full ROM, and progressive overload.\n\nहिंदी: सबसे अच्छे chest exercises: bench press, incline dumbbell press, cable flyes, dips। मसल पर फ़ोकस करें और वज़न बढ़ाते जाएं।" },
            // Back
            { kw: ["back", "pull up", "pull-up", "pullups", "lat", "back workout", "back exercise", "rowing", "row", "back kya", "back kaise"], ans: "Best back exercises: pull-ups (wide grip), barbell rows, lat pulldowns, cable face pulls. Pull with elbows, squeeze at the top. Train back as hard as chest.\n\nहिंदी: back के लिए: pull-ups, barbell rows, lat pulldowns, face pulls। कोहनियों से खींचें, ऊपर squeeze करें।" },
            // Legs
            { kw: ["leg", "legs", "squat", "leg workout", "leg day", "quad", "hamstring", "glute", "glutes", "calf", "leg pain", "leg kya", "leg kaise"], ans: "Best leg exercises: barbell squats, Romanian deadlifts, leg press, walking lunges, calf raises. Don't skip leg day — it releases the most growth hormone.\n\nहिंदी: पैरों के लिए: squats, deadlifts, leg press, lunges, calf raises। Leg day सबसे ज़्यादा growth hormone रिलीज़ करता है।" },
            // Shoulders
            { kw: ["shoulder", "shoulders", "lateral raise", "military press", "overhead press", "delt", "delts", "shoulder workout", "shoulder exercise", "kandhay", "shoulder kya"], ans: "Best shoulders: overhead press, lateral raises, face pulls, rear delt flyes. Shoulders recover fast — train 2–3×/week. Don't ignore rear delts.\n\nहिंदी: कंधों के लिए: overhead press, lateral raises, face pulls। कंधे जल्दी रिकवर होते हैं — हफ़्ते में 2–3 बार कर सकते हैं।" },
            // Arms (Biceps / Triceps)
            { kw: ["bicep", "biceps", "bicep curl", "biceps curl", "bicep exercise", "arms", "tricep", "triceps", "tricep exercise", "arm workout", "arm", "arm kya", "arm kaise", "bahu", "biceps badhao"], ans: "Arms: curl for biceps (barbell, dumbbell, cable), press & extend for triceps. Direct arm work 2×/week. 9–12 total sets per week. Triceps = ⅔ of arm size.\n\nहिंदी: Biceps के लिए curls, triceps के लिए presses/extensions। हफ़्ते में 2 बार। Triceps का साइज़ biceps से दोगुना होता है।" },
            // Diet / Meal
            { kw: ["diet", "meal plan", "meal prep", "nutrition", "nutrition plan", "what to eat", "diet plan", "diet tips", "diet kya", "kya khaye", "kya khao", "healthy eating", "meal"], ans: "Build each meal: lean protein (chicken, fish, eggs, paneer, tofu) + complex carbs (rice, oats, sweet potato) + veggies + healthy fats. Eat 4–6 meals, 3–4 hours apart.\n\nहिंदी: हर meal में प्रोटीन (चिकन, अंडे, पनीर) + कार्ब्स (चावल, oats, आलू) + सब्ज़ियां + हेल्दी फैट। 4–6 meals खाएं।" },
            // Vegetarian/Vegan
            { kw: ["vegetarian", "vegan", "plant based", "plant-based", "veg protein", "veg diet", "veg meal", "shakahari", "veg kya", "veg khana", "veg food"], ans: "Plant protein sources: paneer (18g/100g), tofu (8g/100g), soya chunks (52g/100g!), lentils, chickpeas, quinoa, peanut butter. Combine rice + dal for complete protein.\n\nहिंदी: Veg protein: पनीर (18g), सोया चंक्स (52g!), दाल, chana, quinoa, मूंगफली। चावल + दाल से पूरा protein मिलता है।" },
            // Non-veg
            { kw: ["non veg", "nonveg", "non-veg", "chicken", "egg", "fish", "meat", "chicken breast", "mutton", "non-vegetarian"], ans: "Lean animal proteins: chicken breast (31g protein/100g), eggs (6g each), fish (20–25g/100g), lean beef (26g/100g). Egg whites are pure protein; yolk has vitamins.\n\nहिंदी: नॉनवेज protein: चिकन ब्रेस्ट (31g/100g), अंडा (6g), मछली (20–25g/100g), लीन बीफ़ (26g/100g)।" },
            // Intermittent Fasting
            { kw: ["intermittent fasting", "if", "fasting", "16:8", "16/8", "omad", "time restricted eating", "fasting kya", "fasting kaise", "roza", "upwas", "fasting benefits"], ans: "IF is a meal timing strategy — not a diet. Common protocol: 16h fast, 8h eating window (e.g. 12pm–8pm). Helps with calorie control but not superior for muscle gain.\n\nहिंदी: IF का मतलब 16 घंटे भूखे रहना, 8 घंटे खाना। जैसे 12 बजे से 8 बजे तक खाएं। वज़न कम करने में मददगार।" },
            // Keto
            { kw: ["keto", "ketogenic", "low carb", "low-carb", "ketosis", "keto diet", "keto kya", "keto tips", "keto diet plan"], ans: "Keto: <50g carbs/day, high fat, moderate protein. Rapid initial fat loss but hard to sustain. Most people feel low energy for high-intensity training on keto.\n\nहिंदी: Keto: <50g carbs/दिन, high fat, moderate protein। तेज़ी से weight loss होता है लेकिन लंबे समय तक मुश्किल। Workout में एनर्जी कम लगती है।" },
            // Stretching / Mobility
            { kw: ["stretch", "stretching", "flexibility", "mobility", "warm up", "warmup", "cool down", "stretch kya", "stretch kaise", "stretching tips", "flexible", "warmup karen"], ans: "Warm-up: 5–10 min light cardio + dynamic stretches (leg swings, arm circles, cat-cow). Cool-down: static stretches held 20–30s each. Mobility 2–3×/week prevents injury.\n\nहिंदी: Warm-up: 5–10 मिनट cardio + स्ट्रेचिंग। Cool-down: 20–30 सेकंड तक स्ट्रेच रखें। हफ़्ते में 2–3 बार mobility करें।" },
            // Injury / Pain
            { kw: ["injury", "pain", "hurt", "sore", "soreness", "muscle pain", "back pain", "joint pain", "knee pain", "shoulder pain", "injury kya", "pain kya", "soreness kyu", "domestic", "doms"], ans: "Muscle soreness (DOMS) is normal 24–72h after training. Joint pain is NOT — stop that exercise. RICE: Rest, Ice, Compression, Elevation. See a doctor for persistent pain.\n\nहिंदी: मांसपेशियों में दर्द (DOMS) normal है 24–72 घंटे तक। जोड़ों में दर्द होने पर वो exercise बंद करें। डॉक्टर से मिलें।" },
            // Stress / Mental Health
            { kw: ["stress", "mental health", "anxiety", "depression", "mindset", "motivation", "mental fitness", "stress kya", "tension", "tension kya", "stress kam", "mind"], ans: "Exercise boosts mood. 30 min moderate exercise releases endorphins. Consistency builds discipline — motivation follows action. Sleep well, eat well, stay social.\n\nहिंदी: एक्सरसाइज़ से मूड अच्छा रहता है। रोज़ 30 मिनट Exercise करें। नियमितता से आत्म-अनुशासन बनता है। अच्छा खाएं, खूब सोएं।" },
            // Beginners
            { kw: ["beginner", "newbie", "start gym", "gym start", "gym kaise start", "kaise shuru", "first time", "starting gym", "shuruwat", "beginner gym", "no experience"], ans: "Starting: focus on form first, not weight. Start with 3× full-body/week. Learn compound lifts: squat, bench, row, overhead press. Watch videos to learn form. Stay consistent.\n\nहिंदी: शुरुआत में फ़ॉर्म सीखें, वज़न न बढ़ाएं। हफ़्ते में 3 बार जाएं। Squat, bench press, row सीखें। लगातार जाएं — रिज़ल्ट आएगा।" },
            // Women
            { kw: ["women", "woman", "girl", "female", "ladies", "lady", "women workout", "women fitness", "women tips", "girls gym", "women gym tips", "female fitness"], ans: "Ladies: lifting weights will NOT make you bulky — it builds shape & strength. Great exercises: squats, hip thrusts, RDLs, lat pulldowns, rows. Cardio + weights are the perfect combo.\n\nहिंदी: महिलाएं: वेट उठाने से body बल्की नहीं होती — शेप आती है। Deadlifts, squats, hip thrusts करें। वेट + cardio दोनों ज़रूरी हैं।" },
            // Pregnancy
            { kw: ["pregnancy", "pregnant", "pregnancy exercise", "pregnancy diet", "pregnancy tips", "garbhavati", "pregnancy safe"], ans: "Consult your doctor first. Generally: walking, swimming, prenatal yoga are safe. Avoid heavy lifting & exercises lying on your back after 1st trimester. Stay hydrated.\n\nहिंदी: पहले डॉक्टर से पूछें। चलना, तैरना, हल्का yoga safe है। भारी वज़न और पीठ के बल exercise से बचें।" },
            // Age (Old / Young)
            { kw: ["old age", "older", "senior", "age 50", "age 40", "age 60", "age kya", "fitness after 40", "fitness after 50"], ans: "It's never too late! Focus on: mobility, balance, joint health, and light strength training. Walking, swimming, yoga are excellent. Maintain protein intake to prevent muscle loss.\n\nहिंदी: उम्र कोई मायने नहीं रखती। चलना, तैरना, हल्का वेट ट्रेनिंग करें। Protein लेना न भूलें — उम्र के साथ muscle कम होता है।" },
            // Yoga
            { kw: ["yoga", "yoga kya", "yoga exercise", "yoga asana", "yoga benefits", "yoga tips", "yoga kaise", "yog"], ans: "Yoga improves flexibility, balance, strength, and mental focus. Practiced 3–5×/week. Great styles: Hatha (beginner), Vinyasa (flow), Ashtanga (strong).\n\nहिंदी: योग से लचीलापन, संतुलन और मानसिक शांति मिलती है। हफ़्ते में 3–5 बार करें। Hatha (आसान), Vinyasa (फ़्लो) से शुरू करें।" },
            // Diabetes
            { kw: ["diabetes", "sugar", "diabetic", "blood sugar", "diabetes diet", "diabetes exercise", "diabetes kya", "shuger", "sugar kam"], ans: "Exercise improves insulin sensitivity. Combine strength training + cardio. Eat low-GI foods (oats, sweet potato, dal). Avoid sugary drinks & refined carbs. Monitor blood sugar.\n\nहिंदी: Exercise से शुगर कंट्रोल रहता है। वेट ट्रेनिंग + cardio करें। Oats, दाल, शकरकंद खाएं। मीठा और रिफ़ाइंड आटा कम खाएं।" },
            // Cholesterol
            { kw: ["cholesterol", "high cholesterol", "ldl", "hdl", "cholesterol diet", "cholesterol kya", "cholesterol kam", "heart health"], ans: "Heart health: eat oats, nuts, olive oil, fatty fish, and leafy greens. Limit trans fats, fried food, and processed meat. Cardio 150 min/week. Strength training also helps.\n\nहिंदी: दिल के लिए: oats, nuts, जैतून का तेल, मछली, हरी सब्ज़ियां खाएं। तला हुआ और processed food कम खाएं। Cardio करें।" },
            // Alcohol
            { kw: ["alcohol", "beer", "wine", "whiskey", "drink", "alcohol gym", "alcohol kya", "alcohol effect", "sharab", "drinking"], ans: "Alcohol slows muscle growth by reducing protein synthesis. 1–2 drinks occasionally is fine. Heavy drinking kills gains, ruins sleep, dehydrates. If you must: clear spirits + diet soda.\n\nहिंदी: शराब से muscle growth कम होता है। कभी-कभी 1–2 drinks ठीक है। ज़्यादा पीने से गेन्स खत्म, नींद ख़राब, डिहाइड्रेशन।" },
            // Multilingual greeting / Help
            { kw: ["hello", "hi", "hey", "helo", "namaste", "namastey", "hola", "start", "help", "salam", "kya kar sakte", "kaise ho", "good morning", "good evening", "good night", "sup"], ans: "Hey! I'm REPNOXX Health AI. I understand English, Hindi, Hinglish — any language!\n\nAsk me about: 💪 Workouts & Gym\n🥗 Diet & Nutrition\n🔥 Fat Loss & Bulking\n💊 Supplements\n😴 Sleep & Recovery\n🏠 Home Workouts\n\nहिंदी में पूछें: वर्कआउट, डाइट, प्रोटीन, वज़न घटाना, वज़न बढ़ाना — मैं सब बताऊंगा!" },
            // Thanks
            { kw: ["thanks", "thank you", "thx", "ty", "awesome", "great", "good bot", "perfect", "nice", "cool", "super", "shukriya", "dhanyavaad"], ans: "You're welcome! 💪 Train hard, eat smart, stay consistent. Any other questions — I'm here!\n\nहिंदी: आपका स्वागत है! 💪 लगातार मेहनत करें, अच्छा खाएं और मुझसे कुछ भी पूछें!" }
        ];
    }

    // Language detection: returns "hi" if Hindi/Devanagari, "hinglish" if Roman Hindi, "en" otherwise
    detectLanguage(text) {
        if (/[\u0900-\u097F]/.test(text)) return "hi";
        const hinglishMarkers = ["kaise", "kya", "kyu", "kyun", "hota", "hoti", "hai", "ho", "hu", "tha", "the", "thi", "ko", "ka", "ki", "ke", "se", "me", "mein", "main", "aap", "tum", "hum", "mera", "tera", "apna", "karo", "kare", "karna", "lena", "dena", "khana", "jana", "aana", "pana", "wala", "wali", "waley", "bataye", "batayein", "saktai"];
        const words = text.toLowerCase().split(/[\s,?!.]+/);
        const hits = words.filter(w => hinglishMarkers.includes(w)).length;
        if (hits >= 2 || (hits === 1 && words.length <= 3)) return "hinglish";
        return "en";
    }

    initChatbot() {
        const fab = document.getElementById("chatFab");
        const panel = document.getElementById("chatPanel");
        const closeBtn = document.getElementById("chatClose");
        const sendBtn = document.getElementById("chatSendBtn");
        const input = document.getElementById("chatInput");

        if (fab && panel) {
            fab.addEventListener("click", () => {
                panel.classList.toggle("open");
                fab.classList.toggle("active");
                if (panel.classList.contains("open")) {
                    this.renderChatSuggestions();
                    setTimeout(() => {
                        const msgs = document.getElementById("chatMessages");
                        if (msgs) msgs.scrollTop = msgs.scrollHeight;
                    }, 100);
                }
            });
        }
        if (closeBtn && panel) {
            closeBtn.addEventListener("click", () => {
                panel.classList.remove("open");
                if (fab) fab.classList.remove("active");
            });
        }
        const send = () => {
            const text = input?.value?.trim();
            if (text) {
                this.addChatMessage(text, "user");
                input.value = "";
                setTimeout(() => this.handleChatQuery(text), 300);
            }
        };
        if (sendBtn) sendBtn.addEventListener("click", send);
        if (input) {
            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") send();
            });
        }
    }

    addChatMessage(text, sender, isTemp = false) {
        const container = document.getElementById("chatMessages");
        if (!container) return;
        if (isTemp) {
            let existing = container.querySelector(".chat-temp");
            if (existing) existing.remove();
        }
        const div = document.createElement("div");
        div.className = `chat-msg ${sender}`;
        if (isTemp) div.classList.add("chat-temp");
        div.innerHTML = `<div class="chat-bubble">${this.escapeHtml(text)}</div>`;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
        return div;
    }

    escapeHtml(str) {
        const d = document.createElement("div");
        d.textContent = str;
        return d.innerHTML;
    }

    // Real AI via Hugging Face Inference API (free, no key needed)
    async callAiApi(query) {
        const models = [
            "https://api-inference.huggingface.co/models/google/flan-t5-base",
            "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium"
        ];
        const prompt = `Answer the health and fitness question clearly and helpfully. Keep it practical and concise.\n\nQuestion: ${query}\nAnswer:`;
        for (const url of models) {
            try {
                const controller = new AbortController();
                const timeout = setTimeout(() => controller.abort(), 12000);
                const res = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ inputs: prompt }),
                    signal: controller.signal
                });
                clearTimeout(timeout);
                if (!res.ok) continue;
                const data = await res.json();
                let text = "";
                if (Array.isArray(data)) text = data[0]?.generated_text || "";
                else text = data.generated_text || "";
                if (text && text.length > 10 && text.length < 1500) {
                    // Clean up the response
                    text = text.replace(prompt, "").replace("Answer:", "").replace("Question:", "").trim();
                    return text;
                }
            } catch (e) {
                continue;
            }
        }
        return null;
    }

    // Smart AI-first matching: tries Hugging Face AI, falls back to keyword
    async handleChatQuery(query) {
        // Show thinking indicator
        const thinkingEl = this.addChatMessage("⏳ AI is thinking...", "bot", true);

        // Try AI API first
        let aiAnswer = null;
        try {
            aiAnswer = await this.callAiApi(query);
        } catch (e) { /* fall through */ }

        // Remove thinking indicator
        if (thinkingEl && thinkingEl.parentNode) thinkingEl.remove();

        if (aiAnswer) {
            this.addChatMessage(aiAnswer, "bot");
            this.renderChatSuggestions();
            return;
        }

        // AI failed — fall back to keyword matching
        this.fallbackKeywordQuery(query);
    }

    // Original keyword matching (now fallback)
    fallbackKeywordQuery(query) {
        const q = query.toLowerCase().trim();
        const lang = this.detectLanguage(q);
        const qa = this.healthQa;

        // Strategy 1: keyword scoring
        let best = null, bestScore = 0;
        for (const item of qa) {
            for (const kw of item.kw) {
                if (q.includes(kw)) {
                    const score = kw.length / Math.max(q.length, 1);
                    if (score > bestScore) { bestScore = score; best = item.ans; }
                }
            }
        }
        // Boost score for multi-keyword hits on same item
        for (const item of qa) {
            let hits = 0;
            for (const kw of item.kw) {
                if (q.includes(kw)) hits++;
            }
            if (hits >= 2) {
                const bonus = hits * 0.15;
                if (bonus > bestScore || (bonus === bestScore && item.ans)) { bestScore = bonus; best = item.ans; }
            }
        }

        if (best && bestScore > 0.08) {
            this.addChatMessage(best, "bot");
            this.renderChatSuggestions();
            return;
        }

        // Strategy 2: extract any domain word and give general response
        const domains = [
            { words: ["workout", "gym", "exercise", "train", "lift", "work out", "work out"], msg: "I can help with workouts! Try asking about: chest, back, legs, shoulders, arms, abs, cardio, bodyweight, beginner routines, or workout splits." },
            { words: ["diet", "food", "meal", "eat", "khana", "diet plan", "nutrition", "khaye", "khao"], msg: "I can help with diet & nutrition! Try asking about: calories, protein, carbs, fats, meal plans, vegetarian/vegan, or non-veg options." },
            { words: ["fat", "weight", "mota", "patla", "lose", "gain", "bulk", "loss", "kam", "badhao"], msg: "I can help with weight goals! Try: fat loss tips, bulking tips, calorie deficit, calorie surplus, or body fat percentage." },
            { words: ["supplement", "whey", "creatine", "protein powder", "vitamin", "pre workout", "dava"], msg: "I can help with supplements! Try asking about: whey protein, creatine, pre-workout, multivitamins, or what supplements you actually need." },
            { words: ["pain", "injury", "sore", "hurt", "dard", "chot", "recovery", "sleep", "neend", "aaram"], msg: "I can help with recovery & injury! Try: soreness, sleep tips, injury prevention, stretching, or mobility." }
        ];
        for (const d of domains) {
            for (const w of d.words) {
                if (q.includes(w)) {
                    this.addChatMessage(d.msg, "bot");
                    this.renderChatSuggestions();
                    return;
                }
            }
        }

        // Strategy 3: very short input
        if (q.length < 3) {
            this.addChatMessage("Ask me anything about health & fitness! कोई भी सवाल पूछें — वर्कआउट, डाइट, प्रोटीन, वज़न घटाना, सब बताऊंगा!", "bot");
            this.renderChatSuggestions();
            return;
        }

        // Strategy 4: detect language for fallback
        if (lang === "hi") {
            this.addChatMessage("मुझे आपका सवाल समझ नहीं आया। कृपया ऐसे पूछें: 'प्रोटीन कितना लें?', 'वज़न कैसे घटाएं?', 'क्या खाएं?', 'workout कैसे करें?' मैं आपकी मदद करूंगा!", "bot");
        } else if (lang === "hinglish") {
            this.addChatMessage("Bhai samajh nahi aaya. Aise pucho: 'protein kitna lena?', 'weight kaise kam kare?', 'gym kaise start kare?', 'kya khaye?' — main sab batata hoon!", "bot");
        } else {
            this.addChatMessage("I didn't quite understand. Try asking about: protein, calories, workouts, diet, fat loss, bulking, supplements, sleep, or type 'help'. I understand Hindi & Hinglish too!", "bot");
        }
        this.renderChatSuggestions();
    }

    renderChatSuggestions() {
        const container = document.getElementById("chatSuggestions");
        if (!container) return;
        const suggestions = [
            { label: "💪 Protein kitna?", q: "how much protein do I need" },
            { label: "🔥 Weight loss kaise?", q: "how to lose weight fast" },
            { label: "🏋️ Workout routine?", q: "best workout split for beginner" },
            { label: "🥗 Veg protein source", q: "best vegetarian protein sources" },
            { label: "💊 Creatine benefits", q: "creatine kya hai aur kaise le" },
            { label: "😴 Sleep tips", q: "how to sleep better for muscle growth" }
        ];
        container.innerHTML = suggestions.map(s =>
            `<span class="chat-suggestion" data-query="${this.escapeHtml(s.q)}">${this.escapeHtml(s.label)}</span>`
        ).join("");
        container.querySelectorAll(".chat-suggestion").forEach(el => {
            el.addEventListener("click", () => {
                const input = document.getElementById("chatInput");
                if (input) {
                    input.value = el.dataset.query;
                    this.addChatMessage(el.dataset.query, "user");
                    input.value = "";
                    setTimeout(() => this.handleChatQuery(el.dataset.query), 300);
                }
            });
        });
    }

    /* ====================================================
       DASHBOARD IMPROVEMENTS
       ==================================================== */

    initDashboard() {
        const quotes = [
            "The only bad workout is the one that didn't happen.",
            "It doesn't get easier. You get stronger.",
            "Strength does not come from the body. It comes from the will.",
            "The pain you feel today will be the strength you feel tomorrow.",
            "Success starts with self-discipline.",
            "Your body can stand almost anything. It's your mind you have to convince.",
            "No pain, no gain. Shut up and train.",
            "The best project you'll ever work on is you.",
            "Don't wish for it. Work for it.",
            "Strive for progress, not perfection.",
            "Be stronger than your strongest excuse.",
            "Push yourself because no one else is going to do it for you."
        ];
        const today = new Date();
        const qIdx = (today.getFullYear() * 365 + today.getMonth() * 30 + today.getDate()) % quotes.length;
        const qEl = document.getElementById("dailyQuote");
        if (qEl) qEl.textContent = `"${quotes[qIdx]}"`;

        const dateEl = document.getElementById("heroDateVal");
        if (dateEl) dateEl.textContent = today.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

        this.updateHeroWeight();
    }

    updateHeroWeight() {
        const meas = this.safeParseStorage("repnoxx_measurements", []);
        const wEl = document.getElementById("heroWeightVal");
        if (wEl) {
            const last = meas.length > 0 ? meas[meas.length - 1] : null;
            wEl.textContent = last && last.weight ? `${last.weight} kg` : "—";
        }
    }

    /* ====================================================
       PROGRESS HUB — TABS
       ==================================================== */

    initProgressTabs() {
        document.querySelectorAll(".progress-tab").forEach(tab => {
            tab.addEventListener("click", () => {
                document.querySelectorAll(".progress-tab").forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                document.querySelectorAll(".progress-pane").forEach(p => p.classList.remove("active"));
                const pane = document.getElementById("ppane-" + tab.dataset.ptab);
                if (pane) pane.classList.add("active");
                if (tab.dataset.ptab === "badges") this.renderBadges();
            });
        });
    }

    /* ====================================================
       WORKOUT LOGGER
       ==================================================== */

    initWorkoutLogger() {
        const sel = document.getElementById("logExercise");
        if (!sel) return;
        // Populate with gym exercises
        const all = [...this.safeParseStorage("repnoxx_gym_exercises", DEFAULT_GYM_EXERCISES), ...this.safeParseStorage("repnoxx_home_workouts", DEFAULT_HOME_WORKOUTS)];
        const seen = new Set();
        sel.innerHTML = all.filter(e => { if (seen.has(e.name)) return false; seen.add(e.name); return true; }).map(e =>
            `<option value="${this.escapeHtml(e.name)}">${this.escapeHtml(e.name)}</option>`
        ).join("");

        const btn = document.getElementById("logWorkoutBtn");
        if (btn) {
            btn.addEventListener("click", () => {
                const name = sel.value;
                const sets = parseInt(document.getElementById("logSets")?.value) || 3;
                const reps = parseInt(document.getElementById("logReps")?.value) || 10;
                const weight = parseFloat(document.getElementById("logWeight")?.value) || 0;
                if (!name) { this.showToast("Select an exercise first.", "error"); return; }

                const logs = this.safeParseStorage("repnoxx_workout_logs", []);
                const est1rm = Math.round(weight * (1 + reps / 30));
                logs.push({
                    id: Date.now() + "_" + Math.random().toString(36).substr(2, 4),
                    name, sets, reps, weight, est1rm,
                    date: new Date().toISOString().split("T")[0]
                });
                this.saveState("repnoxx_workout_logs", logs);
                this.renderWorkoutLogs();
                this.showToast(`Logged: ${name} ${sets}×${reps} @ ${weight}kg`, "success");
            });
        }
        this.renderWorkoutLogs();
    }

    renderWorkoutLogs() {
        const container = document.getElementById("logHistory");
        if (!container) return;
        const logs = this.safeParseStorage("repnoxx_workout_logs", []);
        if (logs.length === 0) {
            container.innerHTML = '<div style="font-size:13px;color:rgba(255,255,255,0.3);padding:20px 0;text-align:center;">No workouts logged yet. Start tracking your progress!</div>';
            return;
        }
        // Show last 50
        const recent = logs.slice(-50).reverse();
        container.innerHTML = recent.map(l =>
            `<div class="log-entry">
                <span class="le-name">${this.escapeHtml(l.name)}</span>
                <span><span class="le-detail">${l.sets}×${l.reps} @ ${l.weight}kg</span>${l.weight > 0 ? ` <span class="le-rm">~${l.est1rm}kg 1RM</span>` : ''}<span class="le-date">${l.date}</span></span>
            </div>`
        ).join("");
    }

    /* ====================================================
       BODY MEASUREMENTS
       ==================================================== */

    initMeasurements() {
        const btn = document.getElementById("saveMeasureBtn");
        if (btn) {
            btn.addEventListener("click", () => {
                const waist = parseFloat(document.getElementById("measWaist")?.value) || 0;
                const chest = parseFloat(document.getElementById("measChest")?.value) || 0;
                const arms = parseFloat(document.getElementById("measArms")?.value) || 0;
                const thighs = parseFloat(document.getElementById("measThighs")?.value) || 0;
                const weight = parseFloat(document.getElementById("measWeight")?.value) || 0;
                if (!waist && !chest && !arms && !thighs && !weight) {
                    this.showToast("Enter at least one measurement.", "error");
                    return;
                }
                const meas = this.safeParseStorage("repnoxx_measurements", []);
                meas.push({
                    id: Date.now(),
                    date: new Date().toISOString().split("T")[0],
                    waist, chest, arms, thighs, weight
                });
                this.saveState("repnoxx_measurements", meas);
                this.renderMeasurements();
                this.updateHeroWeight();
                this.showToast("Measurements saved!", "success");
            });
        }
        this.renderMeasurements();
    }

    renderMeasurements() {
        const container = document.getElementById("measHistory");
        const meas = this.safeParseStorage("repnoxx_measurements", []);
        if (container) {
            if (meas.length === 0) {
                container.innerHTML = '<div style="font-size:13px;color:rgba(255,255,255,0.3);padding:12px 0;text-align:center;">No measurements yet.</div>';
            } else {
                const recent = meas.slice(-10).reverse();
                container.innerHTML = recent.map(m =>
                    `<div class="meas-entry">
                        <span style="color:rgba(255,255,255,0.5);font-weight:500;">${m.date}</span>
                        <span style="color:rgba(255,255,255,0.4);font-size:11px;">
                            ${m.weight ? `W:${m.weight}` : ''}${m.waist ? ` Waist:${m.waist}` : ''}${m.chest ? ` Chest:${m.chest}` : ''}${m.arms ? ` Arms:${m.arms}` : ''}${m.thighs ? ` Thighs:${m.thighs}` : ''}
                        </span>
                    </div>`
                ).join("");
            }
        }

        // Chart
        const canvas = document.getElementById("measChart");
        if (!canvas || meas.length < 2) return;
        const ctx = canvas.getContext("2d");
        const w = canvas.parentElement.clientWidth || 400;
        const h = 180;
        canvas.width = w * 2;
        canvas.height = h * 2;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        ctx.scale(2, 2);

        const last10 = meas.slice(-10);
        const labels = last10.map(m => m.date.slice(5));
        const fields = [
            { key: "weight", color: "#FF6B1A", label: "Weight" },
            { key: "waist", color: "#00E676", label: "Waist" },
            { key: "chest", color: "#00BCD4", label: "Chest" },
            { key: "arms", color: "#FFB300", label: "Arms" }
        ];
        const active = fields.filter(f => last10.some(m => m[f.key]));
        if (active.length === 0) return;

        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "rgba(255,255,255,0.06)";
        ctx.strokeStyle = "rgba(255,255,255,0.04)";
        ctx.lineWidth = 0.5;
        for (let i = 0; i <= 4; i++) {
            const y = 20 + i * 35;
            ctx.beginPath();
            ctx.moveTo(50, y);
            ctx.lineTo(w - 10, y);
            ctx.stroke();
        }

        active.forEach(f => {
            const vals = last10.map(m => m[f.key] || 0);
            if (vals.every(v => v === 0)) return;
            const min = Math.min(...vals) - 2;
            const max = Math.max(...vals) + 2;
            const range = max - min || 1;

            ctx.strokeStyle = f.color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            vals.forEach((v, i) => {
                const x = 50 + (i / (vals.length - 1 || 1)) * (w - 60);
                const y = 20 + (1 - (v - min) / range) * 140;
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            });
            ctx.stroke();

            // Dots
            vals.forEach((v, i) => {
                const x = 50 + (i / (vals.length - 1 || 1)) * (w - 60);
                const y = 20 + (1 - (v - min) / range) * 140;
                ctx.fillStyle = f.color;
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fill();
            });
        });

        // X labels
        ctx.fillStyle = "rgba(255,255,255,0.2)";
        ctx.font = "9px Inter, sans-serif";
        labels.forEach((l, i) => {
            const x = 50 + (i / (labels.length - 1 || 1)) * (w - 60);
            ctx.fillText(l, x - 10, h - 4);
        });
    }

    /* ====================================================
       1RM CALCULATOR
       ==================================================== */

    initRmCalc() {
        const btn = document.getElementById("calcRmBtn");
        if (!btn) return;
        btn.addEventListener("click", () => {
            const weight = parseFloat(document.getElementById("rmWeight")?.value);
            const reps = parseInt(document.getElementById("rmReps")?.value) || 8;
            if (!weight || weight <= 0 || reps < 1) {
                this.showToast("Enter weight and reps.", "error");
                return;
            }
            const est1rm = Math.round(weight * (1 + reps / 30));
            const container = document.getElementById("rmResult");
            if (!container) return;
            container.style.display = "block";

            let tableHTML = "";
            for (let r of [1, 2, 3, 5, 8, 10, 12, 15]) {
                const est = Math.round(est1rm / (1 + r / 30));
                tableHTML += `<span>${r}RM: ${est}kg</span>`;
            }

            container.innerHTML = `
                <div class="rm-title">Estimated One-Rep Max</div>
                <div class="rm-value">${est1rm} kg</div>
                <div style="font-size:12px;color:rgba(255,255,255,0.3);margin-top:4px;">Based on ${weight}kg × ${reps} reps (Epley formula)</div>
                <div class="rm-table">${tableHTML}</div>
            `;
        });
    }

    /* ====================================================
       PROGRESS PHOTOS
       ==================================================== */

    initProgressPhotos() {
        const btn = document.getElementById("uploadPhotoBtn");
        const input = document.getElementById("progressPhotoInput");
        if (btn && input) {
            btn.addEventListener("click", () => input.click());
            input.addEventListener("change", (e) => {
                if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        const photos = this.safeParseStorage("repnoxx_progress_photos", []);
                        photos.push({
                            id: Date.now(),
                            date: new Date().toISOString().split("T")[0],
                            data: ev.target.result
                        });
                        this.saveState("repnoxx_progress_photos", photos);
                        this.renderProgressPhotos();
                    };
                    reader.readAsDataURL(e.target.files[0]);
                }
            });
        }
        this.renderProgressPhotos();
    }

    renderProgressPhotos() {
        const grid = document.getElementById("photoGrid");
        if (!grid) return;
        const photos = this.safeParseStorage("repnoxx_progress_photos", []);
        if (photos.length === 0) {
            grid.innerHTML = '<div style="font-size:12px;color:rgba(255,255,255,0.25);padding:20px 0;text-align:center;">No progress photos yet. Start tracking your transformation!</div>';
            return;
        }
        const recent = photos.slice(-20).reverse();
        grid.innerHTML = recent.map(p =>
            `<div class="photo-item">
                <img src="${p.data}" alt="Progress ${p.date}" loading="lazy">
                <div class="photo-date">${p.date}</div>
                <button class="photo-del" data-pid="${p.id}">&times;</button>
            </div>`
        ).join("");
        grid.querySelectorAll(".photo-del").forEach(el => {
            el.addEventListener("click", () => {
                const pid = parseInt(el.dataset.pid);
                let photos = this.safeParseStorage("repnoxx_progress_photos", []);
                photos = photos.filter(p => p.id !== pid);
                this.saveState("repnoxx_progress_photos", photos);
                this.renderProgressPhotos();
                this.showToast("Photo removed.", "info");
            });
        });
    }

    /* ====================================================
       ACHIEVEMENT BADGES
       ==================================================== */

    getBadges() {
        const logs = this.safeParseStorage("repnoxx_workout_logs", []);
        const meas = this.safeParseStorage("repnoxx_measurements", []);
        const meals = this.safeParseStorage("repnoxx_logged_meals", []);
        const photos = this.safeParseStorage("repnoxx_progress_photos", []);

        const daysActive = new Set(logs.map(l => l.date)).size;
        const totalWorkouts = logs.length;
        const totalMeals = meals.length;
        const totalPhotos = photos.length;

        return [
            { id: "first_workout", icon: "🏋️", name: "First Lift", desc: "Log your first workout", unlocked: totalWorkouts >= 1 },
            { id: "week_warrior", icon: "🔥", name: "Week Warrior", desc: "Work out 7 days", unlocked: daysActive >= 7 },
            { id: "month_muscle", icon: "💪", name: "Monthly Grind", desc: "Work out 30 days", unlocked: daysActive >= 30 },
            { id: "century", icon: "🏆", name: "Century Club", desc: "Log 100 workouts", unlocked: totalWorkouts >= 100 },
            { id: "fifty_fifty", icon: "📸", name: "Progress Seeker", desc: "Take 5 progress photos", unlocked: totalPhotos >= 5 },
            { id: "photo_finish", icon: "🖼️", name: "Transformation", desc: "Take 1 progress photo", unlocked: totalPhotos >= 1 },
            { id: "meal_master", icon: "🍗", name: "Meal Master", desc: "Log 50 meals", unlocked: totalMeals >= 50 },
            { id: "diet_dedicated", icon: "🥗", name: "Diet Dedicated", desc: "Log 200 meals", unlocked: totalMeals >= 200 },
            { id: "measuring_up", icon: "📏", name: "Measuring Up", desc: "Save 1 measurement", unlocked: meas.length >= 1 },
            { id: "consistent", icon: "📊", name: "Consistent", desc: "Save 10 measurements", unlocked: meas.length >= 10 },
            { id: "no_pain", icon: "🦵", name: "No Pain No Gain", desc: "Log legs workout", unlocked: logs.some(l => l.name.toLowerCase().includes("squat") || l.name.toLowerCase().includes("leg")) },
            { id: "iron_arms", icon: "💪", name: "Iron Arms", desc: "Log arms workout 10 times", unlocked: logs.filter(l => l.name.toLowerCase().includes("curl") || l.name.toLowerCase().includes("tricep") || l.name.toLowerCase().includes("arm")).length >= 10 },
            { id: "chest_day", icon: "🏋️", name: "Chest Champion", desc: "Log 10 chest workouts", unlocked: logs.filter(l => l.name.toLowerCase().includes("bench") || l.name.toLowerCase().includes("chest") || l.name.toLowerCase().includes("pec")).length >= 10 },
            { id: "cardio_king", icon: "🏃", name: "Cardio King", desc: "Log 5 cardio sessions", unlocked: logs.filter(l => l.name.toLowerCase().includes("cardio") || l.name.toLowerCase().includes("run") || l.name.toLowerCase().includes("walk")).length >= 5 },
            { id: "lifter", icon: "🦿", name: "Lifter", desc: "Log a 100kg+ lift", unlocked: logs.some(l => l.weight >= 100) },
            { id: "heavy", icon: "🏋️‍♂️", name: "Heavy Hitter", desc: "Log a 150kg+ lift", unlocked: logs.some(l => l.weight >= 150) }
        ];
    }

    renderBadges() {
        const grid = document.getElementById("badgesGrid");
        if (!grid) return;
        const badges = this.getBadges();
        const unlocked = badges.filter(b => b.unlocked).length;
        grid.innerHTML = badges.map(b =>
            `<div class="badge-item ${b.unlocked ? 'unlocked' : 'locked'}">
                <div class="badge-icon">${b.icon}</div>
                <div class="badge-name">${b.unlocked ? b.name : '???'}</div>
                <div class="badge-desc">${b.unlocked ? b.desc : 'Keep going!'}</div>
            </div>`
        ).join("") +
        `<div class="badge-item" style="grid-column:1/-1;border:none;background:transparent;padding:8px;flex-direction:row;justify-content:center;gap:8px;">
            <span style="font-size:14px;font-weight:700;color:${unlocked === badges.length ? 'var(--volt)' : 'var(--primary)'};">${unlocked}/${badges.length}</span>
            <span style="font-size:12px;color:rgba(255,255,255,0.3);">badges unlocked</span>
        </div>`;
    }

    /* ====================================================
       INIT ALL PROGRESS HUB FEATURES
       ==================================================== */

    initProgressHub() {
        this.initProgressTabs();
        this.initWorkoutLogger();
        this.initMeasurements();
        this.initRmCalc();
        this.initProgressPhotos();
    }

    /* ====================================================
       USER PROFILE + DATA EXPORT/IMPORT (zero-setup sync)
       ==================================================== */

    initUserSystem() {
        this.currentUser = this.safeParseStorage("repnoxx_current_user", null);
        this._pendingPhoto = null;
        this.updateUserUI();
        this.bindUserEvents();
    }

    bindUserEvents() {
        const loginBtn = document.getElementById("loginBtn");
        const loginModal = document.getElementById("loginModal");
        const closeLogin = document.getElementById("closeLoginModal");

        if (loginBtn && loginModal) {
            loginBtn.addEventListener("click", () => {
                loginModal.classList.add("active");
                resetPhotoPreview();
            });
        }
        const resetPhotoPreview = () => {
            this._pendingPhoto = null;
            const preview = document.getElementById("profilePhotoPreview");
            const placeholder = document.getElementById("profilePhotoPlaceholder");
            if (preview) { preview.style.display = "none"; preview.src = ""; }
            if (placeholder) placeholder.style.display = "inline-block";
        };
        if (closeLogin && loginModal) {
            closeLogin.addEventListener("click", () => { loginModal.classList.remove("active"); resetPhotoPreview(); });
        }
        if (loginModal) {
            loginModal.addEventListener("click", (e) => {
                if (e.target === loginModal) { loginModal.classList.remove("active"); resetPhotoPreview(); }
            });
        }

        // Profile photo upload (login form)
        const photoInput = document.getElementById("profilePhotoInput");
        const photoUploadArea = document.getElementById("profilePhotoUploadArea");
        const photoPreview = document.getElementById("profilePhotoPreview");
        const photoPlaceholder = document.getElementById("profilePhotoPlaceholder");
        if (photoUploadArea && photoInput) {
            photoUploadArea.addEventListener("click", () => photoInput.click());
            photoInput.addEventListener("change", (e) => {
                if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        this._pendingPhoto = ev.target.result;
                        if (photoPreview) { photoPreview.src = ev.target.result; photoPreview.style.display = "block"; }
                        if (photoPlaceholder) photoPlaceholder.style.display = "none";
                    };
                    reader.readAsDataURL(e.target.files[0]);
                }
            });
        }

        // Profile photo change (profile section)
        const photoChangeInput = document.getElementById("profilePhotoChangeInput");
        const avatarContainer = document.getElementById("userAvatarContainer");
        if (avatarContainer && photoChangeInput) {
            avatarContainer.addEventListener("click", () => photoChangeInput.click());
            photoChangeInput.addEventListener("change", (e) => {
                if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        if (this.currentUser) {
                            this.currentUser.photo = ev.target.result;
                            this.saveState("repnoxx_current_user", this.currentUser);
                            this.updateUserUI();
                            this.showToast("Profile photo updated!", "success");
                        }
                    };
                    reader.readAsDataURL(e.target.files[0]);
                }
            });
        }

        // Save profile
        const saveProfileBtn = document.getElementById("saveProfileBtn");
        const nameInput = document.getElementById("profileNameInput");
        if (saveProfileBtn && nameInput) {
            saveProfileBtn.addEventListener("click", () => {
                const name = nameInput.value.trim();
                const email = document.getElementById("profileEmailInput")?.value?.trim() || "";
                if (!name) { this.showToast("Enter your name.", "error"); return; }
                const user = { name, email, id: email || name.toLowerCase().replace(/\s+/g, "_") };
                if (this._pendingPhoto) user.photo = this._pendingPhoto;
                this.saveState("repnoxx_current_user", user);
                this.currentUser = user;
                this._pendingPhoto = null;
                this.updateUserUI();
                loginModal.classList.remove("active");
                this.showToast(`Welcome ${name}!`, "success");
                // Auto-pull if sync password already saved
                const savedPwd = this.safeParseStorage("repnoxx_sync_password", "");
                if (email && savedPwd) {
                    this._silentPullFromCloud(email, savedPwd);
                }
            });
        }

        // Logout
        const logoutBtn = document.getElementById("logoutBtn");
        if (logoutBtn) {
            logoutBtn.addEventListener("click", () => {
                this.currentUser = null;
                this.saveState("repnoxx_current_user", null);
                this.updateUserUI();
                this.showToast("Signed out.", "info");
            });
        }

        // Export data
        const bindExport = (btnId) => {
            const btn = document.getElementById(btnId);
            if (btn) btn.addEventListener("click", () => this.exportAllData());
        };
        bindExport("exportDataBtn");
        bindExport("exportDataBtn2");

        // Import data
        const bindImport = (btnId, inputId) => {
            const btn = document.getElementById(btnId);
            const input = document.getElementById(inputId);
            if (btn && input) {
                btn.addEventListener("click", () => input.click());
                input.addEventListener("change", (e) => {
                    if (e.target.files && e.target.files[0]) this.importAllData(e.target.files[0]);
                });
            }
        };
        bindImport("importDataBtn", "importFileInput");
        bindImport("importDataBtn2", "importFileInput2");

        // Cloud Sync
        const syncPushBtn = document.getElementById("syncPushBtn");
        const syncPullBtn = document.getElementById("syncPullBtn");
        if (syncPushBtn) syncPushBtn.addEventListener("click", () => this.pushToCloud());
        if (syncPullBtn) syncPullBtn.addEventListener("click", () => this.pullFromCloud());

        // Save cloud URL on input
        const syncUrlInput = document.getElementById("syncUrlInput");
        if (syncUrlInput) {
            syncUrlInput.addEventListener("input", () => {
                this.saveState("repnoxx_sync_url", syncUrlInput.value.trim());
                const info = document.getElementById("syncServerInfo");
                if (info) info.textContent = "Server: " + (syncUrlInput.value.trim() || window.location.origin);
            });
        }
    }

    updateUserUI() {
        const btn = document.getElementById("loginBtn");
        const btnText = document.getElementById("loginBtnText");
        const profileSection = document.getElementById("userProfile");
        const loginSection = document.getElementById("loginFormSection");

        if (this.currentUser) {
            if (btn) btn.classList.add("logged-in");
            if (btnText) btnText.textContent = this.currentUser.name;
            if (profileSection) profileSection.style.display = "block";
            if (loginSection) loginSection.style.display = "none";

            const nameEl = document.getElementById("userName");
            const emailEl = document.getElementById("userEmail");
            if (nameEl) nameEl.textContent = this.currentUser.name;
            if (emailEl) emailEl.textContent = this.currentUser.email || "No email";

            // Profile photo
            const avatarImg = document.getElementById("userAvatarImg");
            const avatarLetter = document.getElementById("userAvatarLetter");
            if (avatarLetter) avatarLetter.textContent = (this.currentUser.name || "U")[0].toUpperCase();
            if (avatarImg && this.currentUser.photo) {
                avatarImg.src = this.currentUser.photo;
                avatarImg.style.display = "block";
                if (avatarLetter) avatarLetter.style.display = "none";
            } else {
                if (avatarImg) avatarImg.style.display = "none";
                if (avatarLetter) avatarLetter.style.display = "flex";
            }

            // Show last sync info
            const syncInfo = document.getElementById("syncInfo");
            if (syncInfo) {
                const lastExport = this.safeParseStorage("repnoxx_last_export", null);
                syncInfo.textContent = lastExport ? "Last export: " + lastExport : "Data saved locally. Export to move to another device.";
            }

            // Cloud sync server URL
            const serverInfo = document.getElementById("syncServerInfo");
            const syncUrlInput = document.getElementById("syncUrlInput");
            const savedUrl = this.safeParseStorage("repnoxx_sync_url", "");
            if (syncUrlInput && savedUrl) syncUrlInput.value = savedUrl;
            if (serverInfo) {
                const base = syncUrlInput?.value?.trim() || window.location.origin;
                serverInfo.textContent = "Server: " + base;
            }
            // Restore saved sync password
            const pwdInput = document.getElementById("syncPasswordInput");
            const savedPwd = this.safeParseStorage("repnoxx_sync_password", "");
            if (pwdInput && savedPwd) pwdInput.value = savedPwd;
        } else {
            if (btn) btn.classList.remove("logged-in");
            if (btnText) btnText.textContent = "Sign In";
            if (profileSection) profileSection.style.display = "none";
            if (loginSection) loginSection.style.display = "block";
        }
    }

    exportAllData() {
        const keys = [
            "repnoxx_logged_meals", "repnoxx_workout_logs", "repnoxx_measurements",
            "repnoxx_progress_photos", "repnoxx_target_calories", "repnoxx_target_protein",
            "repnoxx_gym_exercises", "repnoxx_home_workouts", "repnoxx_veg_diet", "repnoxx_nonveg_diet",
            "repnoxx_admin_password", "repnoxx_water_intake", "repnoxx_daily_streak",
            "repnoxx_current_user"
        ];
        const data = { exportedAt: new Date().toISOString(), version: "2.0" };
        for (const key of keys) {
            const val = localStorage.getItem(key);
            if (val) data[key] = JSON.parse(val);
        }
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `repnoxx_backup_${new Date().toISOString().split("T")[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.saveState("repnoxx_last_export", new Date().toLocaleString());
        const si = document.getElementById("syncInfo");
        if (si) si.textContent = "Last export: " + new Date().toLocaleString();
        this.showToast("Data exported! ✅", "success");
    }

    importAllData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (!data.version) throw new Error("Invalid backup file");
                const keys = [
                    "repnoxx_logged_meals", "repnoxx_workout_logs", "repnoxx_measurements",
                    "repnoxx_progress_photos", "repnoxx_target_calories", "repnoxx_target_protein",
                    "repnoxx_gym_exercises", "repnoxx_home_workouts", "repnoxx_veg_diet", "repnoxx_nonveg_diet",
                    "repnoxx_admin_password", "repnoxx_water_intake", "repnoxx_daily_streak",
                    "repnoxx_current_user"
                ];
                for (const key of keys) {
                    if (data[key] !== undefined) {
                        localStorage.setItem(key, JSON.stringify(data[key]));
                    }
                }
                this.currentUser = this.safeParseStorage("repnoxx_current_user", null);
                this.updateUserUI();
                this.renderAll();
                this.showToast("Data imported! 🔄 " + (data.exportedAt ? "from " + data.exportedAt.split("T")[0] : ""), "success");
            } catch (err) {
                this.showToast("Invalid backup file.", "error");
            }
        };
        reader.readAsText(file);
    }

    /* ---------- Cloud Sync (same-network server) ---------- */

    _getSyncData() {
        const keys = [
            "repnoxx_logged_meals", "repnoxx_workout_logs", "repnoxx_measurements",
            "repnoxx_progress_photos", "repnoxx_target_calories", "repnoxx_target_protein",
            "repnoxx_gym_exercises", "repnoxx_home_workouts", "repnoxx_veg_diet", "repnoxx_nonveg_diet",
            "repnoxx_admin_password", "repnoxx_water_intake", "repnoxx_daily_streak",
            "repnoxx_current_user"
        ];
        const data = {};
        for (const key of keys) {
            const val = localStorage.getItem(key);
            if (val) data[key] = JSON.parse(val);
        }
        return data;
    }

    _setSyncStatus(msg, isError = false) {
        const el = document.getElementById("syncStatusMsg");
        if (el) {
            el.textContent = msg;
            el.style.color = isError ? "var(--danger, #ff3b30)" : "rgba(255,255,255,0.4)";
        }
    }

    _getSyncBaseUrl() {
        const url = document.getElementById("syncUrlInput")?.value?.trim() || this.safeParseStorage("repnoxx_sync_url", "");
        if (url) {
            // Save & remove trailing slash
            this.saveState("repnoxx_sync_url", url.replace(/\/+$/, ""));
            return url.replace(/\/+$/, "");
        }
        return "";
    }

    _silentPullFromCloud(email, password) {
        const base = this._getSyncBaseUrl();
        fetch(base + "/api/sync/download?email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password))
        .then(r => r.json())
        .then(res => {
            if (res.ok && res.data) {
                const keys = [
                    "repnoxx_logged_meals", "repnoxx_workout_logs", "repnoxx_measurements",
                    "repnoxx_progress_photos", "repnoxx_target_calories", "repnoxx_target_protein",
                    "repnoxx_gym_exercises", "repnoxx_home_workouts", "repnoxx_veg_diet", "repnoxx_nonveg_diet",
                    "repnoxx_admin_password", "repnoxx_water_intake", "repnoxx_daily_streak",
                    "repnoxx_current_user"
                ];
                for (const key of keys) {
                    if (res.data[key] !== undefined) {
                        localStorage.setItem(key, JSON.stringify(res.data[key]));
                    }
                }
                this.currentUser = this.safeParseStorage("repnoxx_current_user", null);
                this.updateUserUI();
                this.renderAll();
            }
        })
        .catch(() => {});
    }

    pushToCloud() {
        const email = this.currentUser?.email;
        const pwd = document.getElementById("syncPasswordInput")?.value?.trim();
        if (!email) { this._setSyncStatus("Set an email in your profile first.", true); return; }
        if (!pwd) { this._setSyncStatus("Enter a sync password.", true); return; }
        this.saveState("repnoxx_sync_password", pwd);
        this._setSyncStatus("Pushing data...");
        const data = this._getSyncData();
        const base = this._getSyncBaseUrl();
        fetch(base + "/api/sync/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password: pwd, data })
        })
        .then(r => r.json())
        .then(res => {
            if (res.ok) {
                this._setSyncStatus("Synced! " + (res.updatedAt ? res.updatedAt.split("T")[0] : ""));
                this.showToast("Data pushed to cloud! ✅", "success");
            } else {
                this._setSyncStatus(res.error || "Sync failed.", true);
                this.showToast(res.error || "Sync failed", "error");
            }
        })
        .catch(() => {
            this._setSyncStatus("Cannot reach " + (base || "local server") + " — check URL or server status.", true);
            this.showToast("Cannot reach sync server", "error");
        });
    }

    pullFromCloud() {
        const email = this.currentUser?.email;
        let pwd = document.getElementById("syncPasswordInput")?.value?.trim();
        if (!pwd) pwd = this.safeParseStorage("repnoxx_sync_password", "");
        if (!email) { this._setSyncStatus("Set an email in your profile first.", true); return; }
        if (!pwd) { this._setSyncStatus("Enter a sync password.", true); return; }
        this.saveState("repnoxx_sync_password", pwd);
        this._setSyncStatus("Pulling data...");
        const base = this._getSyncBaseUrl();
        fetch(base + "/api/sync/download?email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(pwd))
        .then(r => r.json())
        .then(res => {
            if (res.ok && res.data) {
                const d = res.data;
                const keys = [
                    "repnoxx_logged_meals", "repnoxx_workout_logs", "repnoxx_measurements",
                    "repnoxx_progress_photos", "repnoxx_target_calories", "repnoxx_target_protein",
                    "repnoxx_gym_exercises", "repnoxx_home_workouts", "repnoxx_veg_diet", "repnoxx_nonveg_diet",
                    "repnoxx_admin_password", "repnoxx_water_intake", "repnoxx_daily_streak",
                    "repnoxx_current_user"
                ];
                let count = 0;
                for (const key of keys) {
                    if (d[key] !== undefined) {
                        localStorage.setItem(key, JSON.stringify(d[key]));
                        count++;
                    }
                }
                this.currentUser = this.safeParseStorage("repnoxx_current_user", null);
                this.updateUserUI();
                this.renderAll();
                this._setSyncStatus("Pulled " + count + " items from cloud.");
                this.showToast("Data pulled from cloud! 🔄", "success");
            } else {
                this._setSyncStatus(res.error || "Pull failed.", true);
                if (res.error !== "no data found for this email") this.showToast(res.error || "Pull failed", "error");
            }
        })
        .catch(() => {
            this._setSyncStatus("Cannot reach " + (base || "local server") + " — check URL or server status.", true);
            this.showToast("Cannot reach sync server", "error");
        });
    }

    /* ====================================================
       HELPER NOTIFICATION METHOD (TOAST)
       ==================================================== */
    
    showToast(message, type = "info") {
        const container = document.getElementById("toastContainer");
        if (!container) return;

        const toast = document.createElement("div");
        toast.className = `toast ${type}`;

        let icon = '<i class="fa-solid fa-circle-info"></i>';
        if (type === "success") {
            icon = '<i class="fa-solid fa-circle-check text-volt"></i>';
        } else if (type === "error") {
            icon = '<i class="fa-solid fa-circle-exclamation text-danger"></i>';
        }

        toast.innerHTML = `${icon} <span>${message}</span>`;
        container.appendChild(toast);

        // Slide out and remove toast after 3s
        setTimeout(() => {
            toast.style.transform = "translateX(-150%)";
            toast.style.opacity = "0";
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
}

// Instantiate global app variable on DOM load
let app;
document.addEventListener("DOMContentLoaded", () => {
    app = new RepnoxxApp();
});
