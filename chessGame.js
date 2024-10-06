const boardSize = 8; // حجم اللوحة
let pieces = {}; // لتخزين القطع
let selectedPiece = null; // لتخزين القطعة المحددة

function createBoard() {
    const board = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));
    pieces = {
        '0,0': '♖', '0,1': '♘', '0,2': '♗', '0,3': '♕', '0,4': '♔', '0,5': '♗', '0,6': '♘', '0,7': '♖', // الصف الأول (القطع البيضاء)
        '1,0': '♙', '1,1': '♙', '1,2': '♙', '1,3': '♙', '1,4': '♙', '1,5': '♙', '1,6': '♙', '1,7': '♙', // الصف الثاني (جنود بيضاء)
        '7,0': '♜', '7,1': '♞', '7,2': '♝', '7,3': '♛', '7,4': '♚', '7,5': '♝', '7,6': '♞', '7,7': '♜', // الصف السابع (القطع السوداء)
        '6,0': '♟', '6,1': '♟', '6,2': '♟', '6,3': '♟', '6,4': '♟', '6,5': '♟', '6,6': '♟', '6,7': '♟'  // الصف السادس (جنود سوداء)
    };
    return board;
}

function renderBoard() {
    const boardElement = document.getElementById("board");
    boardElement.innerHTML = ""; // مسح المحتوى السابق
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const square = document.createElement("div");
            square.className = "square " + ((i + j) % 2 === 0 ? "white" : "black");
            square.dataset.row = i;
            square.dataset.col = j;
            square.innerHTML = pieces[`${i},${j}`] || ""; // إظهار القطع
            square.addEventListener("click", () => selectSquare(i, j)); // إضافة حدث الضغط
            boardElement.appendChild(square);
        }
    }
}

function selectSquare(row, col) {
    const key = `${row},${col}`;
    if (selectedPiece) {
        if (pieces[key]) {
            alert("Select another square to move the piece.");
        } else {
            makeMove(selectedPiece.row, selectedPiece.col, row, col); // نقل القطعة
            selectedPiece = null; // إعادة تعيين القطعة المحددة
        }
    } else if (pieces[key]) {
        selectedPiece = { row, col, piece: pieces[key] }; // تعيين القطعة المحددة
    }
}

function makeMove(fromRow, fromCol, toRow, toCol) {
    const piece = pieces[`${fromRow},${fromCol}`]; // الحصول على القطعة
    pieces[`${toRow},${toCol}`] = piece; // نقل القطعة
    delete pieces[`${fromRow},${fromCol}`]; // حذف القطعة من الموقع القديم
    renderBoard(); // إعادة رسم اللوحة
}

function goBack() {
    window.history.back(); // العودة للصفحة السابقة
}

createBoard(); // إنشاء اللوحة
renderBoard(); // رسم اللوحة