const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to serve static files (HTML, CSS, JS) from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Sample research data (in-memory, replace with a database later if needed)
const researchData = [
    {
        id: 1,
        title: "Neurotransmitters",
        description: "Insights on brain signaling pathways and their impact.",
        summary: "This study explores the role of neurotransmitters like dopamine and serotonin in regulating brain functions such as mood, memory, and motor control. Recent findings highlight novel pathways that could lead to targeted therapies for neurological disorders."
    },
    {
        id: 2,
        title: "Antibiotics",
        description: "Strategies to combat resistant bacterial strains.",
        summary: "Research into antibiotic resistance reveals new strategies to combat MRSA and other superbugs. This includes the development of synthetic analogs and combination therapies that restore efficacy to existing drugs."
    },
    {
        id: 3,
        title: "Gene Therapy",
        description: "Next-generation CRISPR tools for precise edits.",
        summary: "Advancements in CRISPR technology have led to more precise gene-editing tools, reducing off-target effects. This study details applications in treating genetic disorders like cystic fibrosis and sickle cell disease."
    }
];

// API endpoint to get research data
app.get('/api/research', (req, res) => {
    res.json(researchData);
});

// API to get a single research item by ID
app.get('/api/research/:id',(req, res) => {
    const id = parseInt(req.params.id);
    const research = researchData.find(item => item.id === id);
    if (research) {
        res.json(research);
    }
    else {
        res.status(404).json({ error: "Research not found" });
    }
});
// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});