# 🍽️ Restaurant Menu Ordering System

A **Django-powered** web application that allows customers to **scan a QR code**, view the menu, place orders, and receive digital receipts. This system enhances the restaurant experience by enabling **real-time order management** with an intuitive user interface.

## 🚀 Features
- 📱 **QR Code Menu** – Customers scan a QR code to access the digital menu.
- 🛒 **Order Placement** – Place orders directly from the web interface.
- ⏳ **Real-Time Order Management** – Track and manage orders seamlessly.
- 📄 **Digital Receipts** – Generate and download order receipts.
- 🎨 **Responsive UI** – Built with **HTML, CSS, and JavaScript** for smooth interactions.
- 💾 **PostgreSQL Database** – Stores menu items and order details securely.
- 🔐 **User Authentication** – Secure login for admins and restaurant staff.

## 🛠️ Tech Stack
| Technology | Description |
|------------|-------------|
| **Python & Django** | Backend framework for web application |
| **HTML, CSS, JS** | Frontend for seamless UI |
| **PostgreSQL** | Database for storing orders & menu items |
| **QR Code API** | Enables menu access via QR scanning |
| **Bootstrap** | Enhances UI responsiveness |

## 📸 Screenshots
### 📌 Home Page  
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)  

### 📌 Menu Page  
![Menu Page](https://via.placeholder.com/800x400?text=Menu+Page)  

### 📌 Order Management  
![Order Management](https://via.placeholder.com/800x400?text=Order+Management)  

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/restaurant-menu-ordering.git
cd restaurant-menu-ordering

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start the Django development server
python manage.py runserver
