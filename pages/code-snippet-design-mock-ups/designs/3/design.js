import styles from './Styles.module.css'

export default function Design() {
  return (
    <div>
      <pre className={styles.background}>
        <div className={styles.row}>
          <span className={`${styles.line_number} ${styles.first_line}`}>
            1
          </span>
          <span className={styles.line_content}>
            <span className="token keyword">function</span>
            <span className="token plain"> </span>
            <span className="token function">get_random_number</span>
            <span className="token punctuation">(</span>
            <span className="token parameter">max_number</span>
            <span className="token punctuation">)</span>
            <span className="token plain"> </span>
            <span className="token punctuation">{'{'}</span>
            <span className="token plain"></span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_number}>2</span>
          <span className={styles.line_content}>
            <span className="token plain">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="token keyword">return</span>
            <span className="token plain"> Math</span>
            <span className="token punctuation">.</span>
            <span className="token function">floor</span>
            <span className="token punctuation">(</span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_number}>3</span>
          <span className={styles.line_content}>
            <span className="token plain">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="token punctuation">(</span>
            <span className="token plain">Math</span>
            <span className="token punctuation">.</span>
            <span className="token function">random</span>
            <span className="token punctuation">(</span>
            <span className="token punctuation">)</span>
            <span className="token plain"> </span>
            <span className="token operator">*</span>
            <span className="token plain"> max_number</span>
            <span className="token punctuation">)</span>
            <span className="token plain"> </span>
            <span className="token operator">+</span>
            <span className="token plain"> </span>
            <span className="token number">1</span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_number}>4</span>
          <span className={styles.line_content}>
            <span className="token plain">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="token punctuation">)</span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_number}>5</span>
          <span className={styles.line_content}>
            <span className="token plain"></span>
            <span className="token punctuation">{'}'}</span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_number}>6</span>
          <span className={styles.line_content}></span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_number}>7</span>
          <span className={styles.line_content}>
            <span className="token plain">console</span>
            <span className="token punctuation">.</span>
            <span className="token function">log</span>
            <span className="token punctuation">(</span>
            <span className="token function">get_random_number</span>
            <span className="token punctuation">(</span>
            <span className="token number">100</span>
            <span className="token punctuation">)</span>
            <span className="token punctuation">)</span>
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_number}>8</span>
          <span className={styles.line_content}>&nbsp;</span>
        </div>

        <div className={styles.row}>
          <span className={styles.line_number}>9</span>
          <span className={styles.line_content}>{`// Output`}</span>
        </div>

        <div className={styles.row}>
          <span
            className={`rounded-bl-md ${styles.line_number} ${styles.last_line}`}
          >
            10
          </span>
          <span className={styles.line_content}>// 27</span>
        </div>
        <button className={styles.copy_button}>Copy</button>
      </pre>

      <ul className="mt-8">
        <li>Baseline with line numbers</li>
        <li>Ouput is shown in the code block</li>
      </ul>
    </div>
  )
}
