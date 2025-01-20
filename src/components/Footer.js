export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold">eSewa Clone</h3>
            <p>Contact us at +977 123456789</p>
            <p>Email: info@esewa-clone.com</p>
          </div>
          <div>
            <h3 className="font-bold">Policy</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Partners</h3>
            <ul>
              <li>Banks</li>
              <li>Western Union</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  