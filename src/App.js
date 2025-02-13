.App {
  text-align: center;
  font-family: Arial, sans-serif;
}

.App-header {
  padding: 20px;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  margin: 20px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 10px;
  font-size: 24px;
  cursor: pointer;
  width: 80%;
  box-sizing: border-box;
}

/* 适配iPhone XR竖屏 */
@media (max-width: 414px) and (max-height: 896px) {
  .icon {
    width: 90%;
    font-size: 20px;
  }
}
